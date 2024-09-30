import React from "react";
import { IoMdClose } from "react-icons/io";

export default function VoteModal({
    isOpen,
    onClose,
    value,
    error,
    voteLoading,
    handleChange,
    handleProposal
}) {
    if (!isOpen) return null; // Don't render if modal is not open

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-lg p-3 rounded-lg shadow-lg relative">
                <h2 className="text-xl font-bold mb-4 text-center text-black">
                    Proposal
                </h2>
                <label className="text-black">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={value.title}
                    placeholder="Title"
                    className="w-full p-2 border border-gray-300 rounded mb-1 text-black"
                    onChange={handleChange}
                />
                {
                  error && !value.title && (
                    <span className="error-message">Please Enter Title</span>
                  )
                }
                {/* Description Input */}
               <div>
               <label className="text-black mt-3">Description</label>
                <textarea
                    placeholder="Description"
                    name="description"
                    id="description"
                    value={value.description}
                    className="w-full p-2 border border-gray-300 rounded mb-1 text-black"
                    rows="3"
                    onChange={handleChange}
                />
                 {
                  error && !value.description && (
                    <span className="error-message">Please Enter Description</span>
                  )
                }
               </div>

                {/* Buttons */}
                <div className="flex justify-end gap-4">
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
                        {voteLoading ? "Loading..." : "Create Proposal"}
                    </button>
                </div>
            </div>
        </div>
    );
}
