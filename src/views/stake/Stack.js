import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Web3 from "web3";
import { stakingAbi, stakingAddress } from "../../contract/stakingContract";
import { AuthUserContext } from "../../conext";
import { toast } from "react-toastify";
import { tokenAbi, tokenAddress } from "../../contract/tokenContract";
export default function Stack() {
    const { pathname } = useLocation();
    const web3 = new Web3(window.ethereum);
    const [address, setAddress] = useState("");
    const [addressError, setAddressError] = useState(false);
    const [addressValidationError, setAddressValidationError] = useState(false);
    const { walletAddress } = useContext(AuthUserContext);
    const [registerLoading, setRegisterLoading] = useState(false);
    const [stakingError, setStakingError] = useState(false);
    const [value, setValue] = useState("");
    const [stakingLoading, setStakingLoading] = useState(false);
    const [redeemLoading, setRedeemLoading] = useState(false);
    const [unlockLoading, setUnlockLoading] = useState(false);
    const [tokenBalance, setTokenBalance] = useState(0);
    const [totalStaked, setTotalStaked] = useState(0);
    const [reeeDisable,setRedeemDisable] = useState(true);
    const [lockDuration,setLockDuration] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const [userHistory,setUserHistory] = useState([])
    const [getUserRewards,setGetUserRewards] = useState(0);
    const satkingIntegrateContract = () => {
        const staking_Contract = new web3.eth.Contract(
            stakingAbi,
            stakingAddress
        );
        return staking_Contract;
    };
    const tokenIntegrateContract = () => {
        const token_Contract = new web3.eth.Contract(tokenAbi, tokenAddress);
        return token_Contract;
    };
    const validateAddress = (address) => {
        const regex = /^0x[a-fA-F0-9]{40}$/;
        return regex.test(address);
    };
    const handleStaking = async () => {
        try {
            const tokenContract = tokenIntegrateContract();
            const stakingCOntract = satkingIntegrateContract();
            if (!value || !lockDuration) {
                setStakingError(true);
                return;
            }
            const currentTime = new Date();
        const lockTime = new Date(lockDuration);
        const lockDurationInSeconds = Math.floor((lockTime.getTime() - currentTime.getTime()) / 1000);
            const weiValue = web3.utils.toWei(value, "ether");
            console.log("weiValue", weiValue, lockDurationInSeconds);
            
            if (walletAddress) {
                if(lockDurationInSeconds > 0){
                    setStakingLoading(true);
                await tokenContract.methods
                    .approve(stakingAddress, weiValue)
                    .send({ from: walletAddress });
                const stakeTokens = await stakingCOntract.methods
                    .stakeTokens(weiValue, lockDurationInSeconds)
                    .send({ from: walletAddress });
                if (stakeTokens) {
                    toast.success("Tokens Staked Successfully!");
                    setValue("");
                    setStakingError(false);
                    getValue()
                }
                } else{
                    toast.error("Invalid lock duration. Please select a future date.");
                }
                
            } else {
                toast.error("Please Wallet Connect First!");
            }
        } catch (e) {
            console.log("e", e);
        } finally {
            setStakingLoading(false);
        }
    };
    const handleRedeemTokens = async () => {
        try {
            const stakingCOntract = satkingIntegrateContract();
            if (walletAddress) {
                setRedeemLoading(true);
                const hasUnlockedTokens = await stakingCOntract.methods.hasUnlockedTokens(walletAddress).call()
                if(!hasUnlockedTokens){
                    toast.error("You must unlock tokens before redeeming!");
                    return;
                }
                const redeemTokens = await stakingCOntract.methods
                    .redeemTokens()
                    .send({ from: walletAddress });
                if (redeemTokens) {
                    toast.success("Tokens Redeem Successfully!");
                }
            } else {
                toast.error("Please Wallet Connect First!");
            }
        } catch (e) {
            console.log("e", e);
        } finally {
            setRedeemLoading(false);
        }
    };
    const handleUnlockTokens = async () => {
        try {
            const stakingCOntract = satkingIntegrateContract();
            if (walletAddress) {
                if(totalStaked > 0){
                    setUnlockLoading(true);
                const unlockTokens = await stakingCOntract.methods
                    .unlockTokens()
                    .send({ from: walletAddress });
                if (unlockTokens) {
                    toast.success("Tokens Unlocked Successfully!");
                    setRedeemDisable(false)
                    getValue();
                }
                } else{
                    toast.error("You must stake tokens before unlocking them!");
                }
                
            } else {
                toast.error("Please Wallet Connect First!");
            }
        } catch (e) {
            console.log("e", e);
        } finally {
            setUnlockLoading(false);
        }
    };
    const getValue = async () => {
        try {
            const tokenContract = tokenIntegrateContract();
            const stakingCOntract = satkingIntegrateContract();
            if (walletAddress) {
                let getTotalStaked = await stakingCOntract.methods
                    .getTotalStaked(walletAddress)
                    .call();
                getTotalStaked = Number(getTotalStaked) / 1e18;
                setTotalStaked(getTotalStaked.toFixed(3));
                let tokenBalance = await tokenContract.methods
                    .balanceOf(walletAddress)
                    .call();
                tokenBalance = Number(tokenBalance) / 1e18;
                setTokenBalance(tokenBalance.toFixed(3));
                let getUserRewards = await stakingCOntract.methods
                .getUserRewards(walletAddress)
                .call();
                getUserRewards = Number(getUserRewards) / 1e18;
                setGetUserRewards(getUserRewards.toFixed(3));
                // const getStakingHistoryCount = await stakingCOntract.methods.getStakingHistoryCount(walletAddress).call();
                // console.log("getStakingHistoryCount", getStakingHistoryCount);
                // for (let id=0; id<Number(getStakingHistoryCount); id++){
                //     console.log("getStakingHistoryCount", id);
                //     const stakingHistory = await stakingCOntract.methods.stakingHistory(walletAddress,0).call()
                //     console.log("getStakingHistoryCount", id, stakingHistory);
                // }
            }
        } catch (e) {
            console.log("e", e);
        }
    };

    useEffect(()=>{
        getValue()
    },[walletAddress])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    const handleRegister = async () => {
        try {
            setAddressValidationError(false);
            const stakingCOntract = satkingIntegrateContract();
            if (!address) {
                setAddressError(true);
                return;
            }
            if (!validateAddress(address)) {
                setAddressValidationError(true);
                return;
            }
            if (walletAddress) {
                if (address === walletAddress) {
                    toast.error("Please Use Another Address");
                } else {
                    setRegisterLoading(true);
                    const registerReferral = await stakingCOntract.methods
                        .registerReferral(address)
                        .send({ from: walletAddress });
                    if (registerReferral) {
                        toast.success("Referral successfully registered.");
                        setAddress("");
                    }
                }
            } else {
                toast.error("Please Wallet Connect First!");
            }
        } catch (e) {
            console.log("e", e);
        } finally {
            setRegisterLoading(false);
        }
    };

    return (
        <div className="flex flex-col mt-14 items-center w-full justify-center h-full">
            <h6 className="flex justify-center items-center text-[30px] md:text-[40px] lg:text-[50px] w-full font-extrabold text-red1 mb-2 md:mb-5">
                Shop With R2PIP
            </h6>
            <div className="flex flex-col md:flex-row justify-between gap-12 w-full  rounded-lg my-8 w-9/12">
                    <div className="flex justify-between rounded-full items-center  py-2 border gap-5 w-full">
                        <span className=" px-4 font-semibold">
                            R2PIP Price
                        </span>
                        <span className="font-bold text-xl px-4">
                            {tokenBalance}
                        </span>
                    </div>
                    <div className="flex justify-between rounded-full items-center  py-2 border gap-5 w-full">
                        <span className=" px-4 font-semibold">Total Staked</span>
                        <span className="font-bold text-xl px-4">
                            {totalStaked}
                        </span>
                    </div>
                    <div className="flex justify-between rounded-full items-center py-2 border gap-5 w-full">
                        <span className=" px-4 font-semibold">User Rewards</span>
                        <span className="font-bold text-xl px-4">{getUserRewards}</span>
                    </div>
                </div>
                
            <div className=" flex flex-col justify-center items-center bg-black text-white p-6 w-full max-w-5xl">
                
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg  w-full mb-5">
                    <h6 className="flex justify-start items-center text-[15px] md:text-[15px] lg:text-[25px] w-full font-extrabold text-white mb-4 md:mb-5">
                        Register Referral
                    </h6>
                    <input
                        type="text"
                        placeholder="Enter Address"
                        className="w-full mb-2 p-3 rounded-lg bg-gray-700 text-white"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    {addressError && !address ? (
                        <span className="error-message">
                            Please Enter Address
                        </span>
                    ) : (
                        addressValidationError && (
                            <span className="error-message text-red-500">
                                Please enter a valid address.
                            </span>
                        )
                    )}
                    <div className="flex flex-col md:flex-row gap-5 justify-center mt-4">
                        <button
                            className="bg-red1 text-white font-bold px-20 py-2 rounded-lg shadow-md"
                            onClick={handleRegister}
                            disabled={registerLoading}
                        >
                            {registerLoading ? "Loading..." : "Register"}
                        </button>
                    </div>
                </div>
                {/* Form Section */}
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg  w-full">
                    {/* <input
                        type="text"
                        placeholder="0xB705D6c5d857F7A34ECDF5C7F12550c99A67ee7f"
                        className="w-full mb-4 p-3 rounded-lg bg-gray-700 text-white"
                        disabled
                    /> */}
                    <label className="text-white font-medium">Enter Amount</label>
                    <input
                        type="number"
                        placeholder="0"
                        className="w-full mb-1 p-3 rounded-lg bg-gray-700 text-white"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    {stakingError && !value && (
                        <span className="error-message">
                            Please Enter Amount
                        </span>
                    )}
                    <div>
                    <label className="text-white font-medium mt-3">Enter Lock Duration</label>
                    <input
                        type="date"
                        placeholder="0"
                        className="w-full mb-1 p-3 rounded-lg bg-gray-700 text-white"
                        value={lockDuration}
                        onChange={(e) => setLockDuration(e.target.value)}
                    />
                    {stakingError && !lockDuration && (
                        <span className="error-message">
                            Please Enter Lock Duration
                        </span>
                    )}  
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-5 justify-center mt-4">
                        <button
                            className="bg-red1 text-white font-bold px-10 md:px-20  py-2 rounded-lg shadow-md"
                            onClick={handleStaking}
                            disabled={registerLoading}
                        >
                            {stakingLoading ? "Loading..." : "Staking"}
                        </button>
                        <button
                            className="bg-red1 text-white text-nowrap font-bold px-10 md:px-20  py-2 rounded-lg shadow-md"
                            onClick={handleUnlockTokens}
                            disabled={unlockLoading}
                        >
                            {unlockLoading ? "Loading..." : "Unlock Tokens"}
                        </button>
                        <button
                            className={redeemLoading ? "bg-red2 text-white text-nowrap font-bold px-10 md:px-20 py-2 rounded-lg shadow-md" : "bg-red1 text-white font-bold px-10 md:px-20 text-nowrap py-2 rounded-lg shadow-md"}
                            onClick={handleRedeemTokens}
                            disabled={redeemLoading}
                        >
                            {redeemLoading ? "Loading..." : "Redeem Tokens"}
                        </button>
                        
                    </div>
                </div>
            </div>
            {/* <h6 className="flex justify-center items-center text-[30px] md:text-[40px] lg:text-[50px] w-full font-extrabold text-red1 mt-12 mb-2 md:mb-5">
                Stake History
            </h6>
            <div className="overflow-x-scroll xl:overflow-hidden shadow-xl w-full flex justify-center">
                <table className="mt-4 max-w-[980px] w-full h-fit table-container">
                    <thead>
                        <tr>
                            <th className="text-start px-4 py-2">Id</th>
                            <th className="text-start px-4 py-2">Amount</th>
                            <th className="text-start px-4 py-2">
                                Stake Time
                            </th>
                           
                            <th className="text-start px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {walletAddress ? (
                            <>
                                {isLoading ? (
                                    <tr className="bg-gray-100 h-96  w-full">
                                        <td
                                            className="text-black/70 text-2xl font-bold "
                                            colspan="4"
                                        >
                                            <div className="flex justify-center items-center">
                                                <div role="status">
                                                    <svg
                                                        aria-hidden="true"
                                                        class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                                        viewBox="0 0 100 101"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                            fill="currentFill"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    <>
                                        {userHistory?.length > 0 ? (
                                            <>
                                                {userHistory?.map(
                                                    (resume, index) => (
                                                        <tr
                                                            key={index}
                                                            className="bg-gray-100"
                                                        >
                                                            <td className="px-4 py-2 text-black text-start">
                                                                {index + 1}
                                                            </td>
                                                            <td className="px-4 py-2 text-black text-start">
                                                                {resume?.title
                                                                    .length > 30
                                                                    ? resume.title.substring(
                                                                          0,
                                                                          30
                                                                      ) + "..."
                                                                    : resume.title}
                                                            </td>
                                                            <td className="px-4 py-2 text-black text-start">
                                                                {resume
                                                                    .description
                                                                    .length > 70
                                                                    ? resume.description.substring(
                                                                          0,
                                                                          70
                                                                      ) + "..."
                                                                    : resume?.description}
                                                            </td>

                                                            <td className="px-4 py-2 text-black text-start">
                                                                {
                                                                    resume?.proposerAddress
                                                                }
                                                            </td>
                                                            
                                                        </tr>
                                                    )
                                                )}
                                            </>
                                        ) : (
                                            <tr className="bg-gray-100 h-96  w-full">
                                                <td
                                                    className="text-black/70 text-2xl font-bold "
                                                    colspan="4"
                                                >
                                                    <div className="flex justify-center items-center">
                                                        Not Found Proposal
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </>
                                )}
                            </>
                        ) : (
                            <tr className="bg-gray-100 h-96  w-full">
                                <td
                                    className="text-black/70 text-2xl font-bold "
                                    colspan="4"
                                >
                                    <div className="flex justify-center items-center">
                                        Connect to Metamask to view your NFTs
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div> */}
        </div>
    );
}
