import React from "react";
import { IoMdClose } from "react-icons/io";

export default function PriceModal({
    isOpen,
    onClose,
    value,
    error,
    voteLoading,
    handleChange,
    handleProposal
}) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-lg p-3 rounded-lg shadow-lg relative">
              

                {/* Modal Content */}
                <h2 className="text-xl font-bold mb-1 text-center text-black">
                    Vote
                </h2>

                {/* Title Input */}
                <label className="text-black">Enter Amount</label>
                <input
                    type="number"
                    name="title"
                    id="title"
                    min={0}
                    value={value}
                    placeholder="Enter Amount"
                    className="w-full p-2 border border-gray-300 rounded mb-1 text-black"
                    onChange={handleChange}
                />
                {
                  error && !value.title && (
                    <span className="error-message">Please Enter Amount</span>
                  )
                }
               
                <div className="flex justify-end gap-4 mt-3">
                    <button
                        className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
                        onClick={onClose}
                        disabled={voteLoading}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-red1 text-white py-2 px-4 rounded"
                        disabled={voteLoading}
                        onClick={handleProposal}
                    >
                        {voteLoading ? "Loading..." : "Vote"}
                    </button>
                </div>
            </div>
        </div>
    );
}
