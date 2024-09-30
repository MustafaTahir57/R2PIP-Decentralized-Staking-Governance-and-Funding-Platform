import React, { useState, useContext, useEffect } from "react";
import VoteModal from "./VoteModal";
import Web3 from "web3";
import { stakingAbi, stakingAddress } from "../../contract/stakingContract";
import { AuthUserContext } from "../../conext";
import { toast } from "react-toastify";
import { tokenAbi, tokenAddress } from "../../contract/tokenContract";
import PriceModal from "./PriceModal";
const VoteTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const web3 = new Web3(window.ethereum);
    const [proposalsDetails, setProposalsDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { walletAddress } = useContext(AuthUserContext);
    const [loadingProposalId, setLoadingProposalId] = useState(null);
    const [value, setValue] = useState({
        title: "",
        description: "",
    });
    const [error, setError] = useState(false);
    const [voteLoading, setVoteLoading] = useState(false);
    const [priceModal,setPriceModal] = useState(false);
    const [price,setPrice] = useState('')
    const [priceError,setPriceError] = useState(false);
    const [priceLoading,setPriceLoading] = useState(false);
    const [proposalId,setProposalId] = useState(null)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
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
    // Function to open the modal
const handlePriceModal = async(proposalId)=>{
    if(proposalId.proposerAddress === walletAddress) {
        toast.error("You cannot vote for your own proposal!");
        return;
    }
    setProposalId(proposalId)
    setPriceModal(true)
}
const handleClosePriceModal = () => {
    setPriceModal(false);
    setPriceError(false);
    setPrice('')
    setPriceLoading(false);
};
    const handleVoteClick = () => {
        setIsModalOpen(true);
    };
    const handlePriceCHange = (e)=>{
        setPrice(e.target.value)
    }
    // Function to close the modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setError(false);
        setValue({
            title: "",
            description: "",
        });
        setVoteLoading(false);
    };
    const handleProposal = async () => {
        try {
            if (!value.title || !value.description) {
                setError(true);
                return;
            }

            if (!walletAddress) {
                toast.error("Please Wallet Connect First!");
                return;
            }
            const stakingCOntract = satkingIntegrateContract();
            setVoteLoading(true);
            const submitProposal = await stakingCOntract.methods
                .submitProposal(value.title, value.description)
                .send({ from: walletAddress });
            if (submitProposal) {
                toast.success("Proposal submitted successfully!");
                getProposal();
                handleCloseModal();
            }
        } catch (e) {
            console.log("e", e);
        } finally {
            setVoteLoading(false);
        }
    };

    const getProposal = async () => {
        try {
            let array = [];
            if (walletAddress) {
                setIsLoading(true);
                const stakingCOntract = satkingIntegrateContract();
                const getUserProposalIDs = await stakingCOntract.methods
                    .getGovernanceProposalsCount()
                    .call();
                    
                    for (let proposalsId=0; proposalsId<Number(getUserProposalIDs); proposalsId++){
                        const proposalDetails = await stakingCOntract.methods
                        .governanceProposals(proposalsId)
                        .call();
                    let object = {
                        title: proposalDetails?.title,
                        description: proposalDetails?.description,
                        proposalsId: Number(proposalsId),
                        proposerAddress: proposalDetails?.proposer,
                        executed: proposalDetails?.executed,
                        voteCount: Number(proposalDetails?.voteCount),
                        endTime: Number(proposalDetails?.endTime)
                    };
                    array.push(object);
                    }
                // for (const proposalsId of getUserProposalIDs) {
               
                // }
                setProposalsDetails(array);
            }
        } catch (e) {
            console.log("e", e);
        } finally {
            setIsLoading(false);
        }
    };

    const handleExecute = async (proposal) => {
        try {
          const currentTime = Math.floor(Date.now() / 1000);
          if (currentTime < proposal?.endTime) {
            toast.error("You cannot execute the proposal before the specified time!");
            return;
            }
            setLoadingProposalId(proposal?.proposalsId);
            const stakingCOntract = satkingIntegrateContract();
            if (!walletAddress) {
              toast.error("Please Wallet Connect First!");
              return;
          }
            const executeProposals  = await stakingCOntract.methods.executeProposals().send({ from: walletAddress });
            if(executeProposals){
                toast.success("Proposal executed successfully!");
                getProposal();
                setLoadingProposalId(null);
            }
        } catch (e) {
            console.log("e", e);
            setLoadingProposalId(null);
        }
    };
    const handleVote = async()=>{
        try{
          if(!price){
            setPriceError(true)
            return;
          }
          const stakingContract = satkingIntegrateContract();
          const tokenContract = tokenIntegrateContract()
          const weiValue = web3.utils.toWei(price, "ether");
          setPriceLoading(true)
          await tokenContract.methods
          .approve(stakingAddress, weiValue)
          .send({ from: walletAddress });
          const vote  = await stakingContract.methods.vote(proposalId?.proposalsId,weiValue).send({ from: walletAddress });
          if(vote){
            toast.success("Vote Successfully")
            handleClosePriceModal()
            getProposal();
          }
        }catch(e){
            console.log("e", e);
        }finally{
            setPriceLoading(false);
        }
    }
    useEffect(() => {
        getProposal();
    }, [walletAddress]);
    return (
        <div className="mt-12 max-w-[1580px] px-4 mx-auto">
            <div className="flex justify-between items-center">
                <h6 className="text-[20px] md:text-[40px] lg:text-[30px] w-full font-extrabold text-white mb-2 md:mb-5">
                    Proposal Details
                </h6>
                <button
                    className="bg-red1 text-white font-bold py-2 px-2 md:px-4 rounded-lg"
                    onClick={handleVoteClick}
                >
                    Proposal
                </button>
            </div>
            <div className="overflow-x-scroll xl:overflow-hidden shadow-xl">
                <table className="mt-4 max-w-[1580px] w-full h-fit table-container">
                    <thead>
                        <tr>
                            <th className="text-start px-4 py-2">Id</th>
                            <th className="text-start px-4 py-2">Title</th>
                            <th className="text-start px-4 py-2">
                                Description
                            </th>
                            <th className="text-start px-4 py-2">
                                Proposal Address
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
                                            colspan="5"
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
                                        {proposalsDetails?.length > 0 ? (
                                            <>
                                                {proposalsDetails?.map(
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
                                                            <td className="px-4 py-2 flex gap-x-4 justify-start">
                                                                <button
                                                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                                                                    disabled={
                                                                        loadingProposalId !==
                                                                        null
                                                                    }
                                                                    onClick={()=>handlePriceModal(resume)}
                                                                >
                                                                    Vote
                                                                </button>
                                                                <button
                                                                    className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ${
                                                                        loadingProposalId ===
                                                                        resume.proposalsId
                                                                            ? "opacity-75"
                                                                            : ""
                                                                    }`}
                                                                    onClick={() =>
                                                                        handleExecute(
                                                                            resume
                                                                        )
                                                                    }
                                                                    disabled={
                                                                        loadingProposalId !==
                                                                        null
                                                                    }
                                                                >
                                                                    {loadingProposalId ===
                                                                    resume.proposalsId
                                                                        ? "Loading..."
                                                                        : "Execute"}
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                            </>
                                        ) : (
                                            <tr className="bg-gray-100 h-96  w-full">
                                                <td
                                                    className="text-black/70 text-2xl font-bold "
                                                    colspan="5"
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
                                    colspan="5"
                                >
                                    <div className="flex justify-center items-center">
                                        Connect to Metamask to view your NFTs
                                    </div>
                                </td>
                            </tr>
                        )}
                        {/*  */}
                    </tbody>
                </table>
            </div>

            {/* Vote Modal */}
            <VoteModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                value={value}
                error={error}
                voteLoading={voteLoading}
                handleChange={handleChange}
                handleProposal={handleProposal}
            />
            <PriceModal 
             isOpen={priceModal}
             onClose={handleClosePriceModal}
             value={price}
             error={priceError}
             voteLoading={priceLoading}
             handleChange={handlePriceCHange}
             handleProposal={handleVote}
            />
        </div>
    );
};

export default VoteTable;
