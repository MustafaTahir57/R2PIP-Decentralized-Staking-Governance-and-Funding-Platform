import React, { useContext, useEffect, useState } from "react";
import Web3 from "web3";
import { AuthUserContext } from "../../conext";
import { toast } from "react-toastify";
import { presaleAbi, presaleAddress } from "../../contract/presaleContract";
import { tokenAbi, tokenAddress } from "../../contract/tokenContract";
import { usdtTokenAbi, usdtTokenAddress } from "../../contract/usdtContract";

export default function Presale() {
    const web3 = new Web3(window.ethereum);
    const [usdtBalance, setUsdtBalance] = useState(0);
    const [bnbBalance, setBnbBalance] = useState(0);
    const [totalUSDRaised, setTotalUSDRaised] = useState(0);
    const [name, setName] = useState("bnb");
    const [value, setValue] = useState("");
    const [calculateValue, setCalculateValue] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [tokenBalance,setTokenBalance] = useState(0);
    const [usdtBalanceOf,setUsdtBalanceOf]= useState(0);
    const { walletAddress } = useContext(AuthUserContext);
    const presaleIntegrateContract = () => {
        const presale_Contract = new web3.eth.Contract(
            presaleAbi,
            presaleAddress
        );
        return presale_Contract;
    };
    const tokenIntegrateContract = () => {
        const token_Contract = new web3.eth.Contract(
            tokenAbi,
            tokenAddress
        );
        return token_Contract;
    };
    const usdtTokenokenIntegrateContract = () => {
        const usdt_Contract = new web3.eth.Contract(
            usdtTokenAbi,
            usdtTokenAddress
        );
        return usdt_Contract;
    };
    const getValue = async () => {
        try {
            const presaleContract = presaleIntegrateContract();
            const getRates = await presaleContract.methods.getRates().call();
            const usdtBalance = Number(getRates.usdt) / 1e18;
            setUsdtBalance(usdtBalance.toFixed(4));
            const bnbBalance = Number(getRates.bnb) / 1e18;
            setBnbBalance(bnbBalance.toFixed(4));
            const totalUSDRaised = await presaleContract.methods
                .totalUSDRaised()
                .call();
                const usdtRaised = Number(totalUSDRaised)/1e18
            setTotalUSDRaised(usdtRaised.toFixed(2));
        } catch (e) {
            console.log("e", e);
        }
    };
    const valueChange = async () => {
        try {
            const presaleContract = presaleIntegrateContract();
            if (value > 0) {
                const weiValue = web3.utils.toWei(value, "ether");
                if (name === "bnb") {
                    const calculateBNBCost = await presaleContract.methods
                        .calculateBNBCost(weiValue)
                        .call();
                        console.log("calculateBNBCost", calculateBNBCost);
                    const calculateValue = Number(calculateBNBCost) / 1e18;
                    setCalculateValue(calculateValue);
                } else {
                    const calculateUSDTCost = await presaleContract.methods
                        .calculateUSDTCost(weiValue)
                        .call();
                        console.log("calculateUSDTCost", calculateUSDTCost);
                        
                    const calculateValue = Number(calculateUSDTCost) / 1e18;
                    setCalculateValue(calculateValue);
                }
            } else {
                setCalculateValue(0);
            }
        } catch (e) {
            console.log("e", e);
        }
    };
    const handlePresale = async () => {
        try {
            const presaleContract = presaleIntegrateContract();
            const usdtContract = usdtTokenokenIntegrateContract()
            const tokenContract = tokenIntegrateContract()
            if (walletAddress) {
                if (value <= 0) {
                    setError(true);
                    return;
                }
                setError(false)
                setLoading(true)
                const weiValue = web3.utils.toWei(calculateValue, "ether");
                if (name === "bnb") {
                    const calculateBNBCost = web3.utils.toWei(calculateValue, "ether")
                    const buyTokensWithBNB = await presaleContract.methods
                        .buyTokensWithBNB()
                        .send({ from: walletAddress, value: calculateBNBCost });
                        if(buyTokensWithBNB){
                            setValue("")
                            setName("bnb")
                            toast.success("R2PIP purchased successfully.");
                        }
                } else{
                    const approve = await usdtContract.methods.approve(presaleAddress,weiValue).send({from:walletAddress});
                    if(approve){
                        const buyTokensWithUSDT = await presaleContract.methods.buyTokensWithUSDT(weiValue).send({from: walletAddress});
                        if(buyTokensWithUSDT){
                            setValue("")
                            setName("usdt")
                            toast.success("R2PIP purchased successfully.");
                        }
                    }
                }
                getValue();
            } else {
                toast.error("Please Wallet Connect First!");
            }
        } catch (e) {
            console.log("e", e);
        }finally{
            setLoading(false)
        }
    };
    const getBalance = async()=>{
        try{
            if(walletAddress){
                const tokenContract = tokenIntegrateContract();
                const usdtContract = usdtTokenokenIntegrateContract()
                let tokenBalance = await tokenContract.methods.balanceOf(walletAddress).call();
                tokenBalance = Number(tokenBalance) / 1e18
                setTokenBalance(tokenBalance.toFixed(3))
                let usdtBalance = await usdtContract.methods.balanceOf(walletAddress).call();
                usdtBalance = Number(usdtBalance) / 1e18
                setUsdtBalanceOf(usdtBalance.toFixed(3))
            }
           
        }catch(e){
            console.log("e", e)
        }
    }
    useEffect(() => {
        valueChange();
    }, [name, value]);
    useEffect(() => {
        getValue();
    }, []);
    useEffect(()=>{
        getBalance();
    },[walletAddress])
    return (
        <div className="w-full max-w-md mx-auto p-6 h-full bg-black rounded-lg shadow-lg text-white">
            {/* Stage and Price Info */}
            <div className="text-center mb-4">
                <h1 className="flex justify-center items-center text-[30px] md:text-[40px] lg:text-[50px] w-full font-extrabold text-red1 mb-2 md:mb-5">
                    Buy now before price increase
                </h1>
            </div>

            {/* Progress Bar */}
            {/* <div className="bg-gray-300 rounded-full h-6 mb-4">
                <div className="bg-green-500 h-6 rounded-full">
                    <span className="block text-white text-sm text-right pr-2">
                        Until Next Price: $0.375
                    </span>
                </div>
            </div> */}

            {/* Raised and Price Information */}
            <div className="bg-gray-800 rounded-2xl p-4">
                <div className=" text-white mb-6">
                    <p className="flex justify-between">
                        USDT Raised:
                        <span className="font-bold text-red1">
                            {totalUSDRaised}
                        </span>
                    </p>
                    <p className="flex justify-between mt-2">
                        Your R2PIP Balance:
                        <span className="font-bold text-red1">{tokenBalance}</span>
                    </p>
                    <p className="flex justify-between mt-2">
                        Your USDT Balance:
                        <span className="font-bold text-red1">{usdtBalanceOf}</span>
                    </p>
                    {/* <p className='flex justify-between'>Listing Price: <span className="font-bold text-red1">$0.07</span></p> */}
                </div>

                {/* Token Price Info */}
                <div className="text-center mb-4">
                    <p>
                        1 R2PIP ={" "}
                        <span className="font-bold">{usdtBalance} USDT</span>
                    </p>
                    <p>
                        1 R2PIP ={" "}
                        <span className="font-bold">{bnbBalance} BNB</span>
                    </p>
                </div>

                {/* Payment Method Selection */}
                <div className="flex flex-col md:flex-row justify-between gap-5 w-full 4 mb-6">
                    <button
                        className={
                            name === "bnb"
                                ? "bg-gray-100 border-2 border-red1 text-red1 font-bold w-full py-2 rounded-lg"
                                : "bg-gray-100 border-2  text-green-500 font-bold w-full py-2 rounded-lg"
                        }
                        onClick={() => setName("bnb")}
                    >
                        BNB
                    </button>
                    <button
                        className={
                            name === "usdt"
                                ? "bg-gray-100 border-2 border-red1 text-red1 font-bold w-full py-2 rounded-lg"
                                : "bg-gray-100 border-2  text-green-500 font-bold w-full py-2 rounded-lg"
                        }
                        onClick={() => setName("usdt")}
                    >
                        USDT
                    </button>
                    {/* <button className="bg-gray-100 border-2 border-gray-500 text-gray-500 font-bold w-full py-2 rounded-lg">CARD</button> */}
                </div>

                {/* ETH Balance */}
                {/* <div className="text-center mb-4">
                    <p className="text-gray-500">
                        ETH Balance: <span className="font-bold">0</span>
                    </p>
                </div> */}

                {/* Amount Input Fields */}
                <div className="flex justify-between mb-4">
                    <div className="w-1/2 pr-2">
                        <input
                            type="number"
                            placeholder="0"
                            className="w-full p-3 bg-gray-100 rounded-lg text-center text-black"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <p className="text-center mt-2 text-gray-500">Amount in R2PIP you receive
                        </p>
                        {error && !value && (
                            <span className="error-message">
                                Please Enter value greater then 0
                            </span>
                        )}
                    </div>
                    <div className="w-1/2 pl-2">
                        <input
                            type="number"
                            placeholder="0"
                            className="w-full p-3 bg-gray-100 rounded-lg text-center text-black"
                            value={calculateValue}
                            readOnly
                        />
                        <p className="text-center mt-2 text-gray-500">
                        Amount in BNB/USDT
                        </p>
                    </div>
                </div>

                {/* <p className="text-center text-red-500 mb-6">
                    You do not have enough to pay for this transaction.
                </p> */}

                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row gap-5 justify-between w-full">
                    {/* <button className="bg-black text-white w-full py-3 rounded-lg font-bold">
                    Connect Wallet
                </button> */}
                    <button
                        className="bg-red1 text-white w-full py-3 rounded-lg font-bold"
                        onClick={handlePresale}
                        disabled={loading}
                    >
                        {loading ? "Loading..." : " Buy Now"}
                    </button>
                </div>
            </div>
        </div>
    );
}
