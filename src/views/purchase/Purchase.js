import React, { useEffect, useState } from 'react';
import { FaDollarSign, FaCoins } from 'react-icons/fa';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export default function CurrencyPurchase() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('USD');
    const [exchangeRate, setExchangeRate] = useState(0.84); // Example exchange rate (1 USD = 0.84 EUR)
    const [fee, setFee] = useState(2); // Example fixed fee

    const totalCost = amount ? (parseFloat(amount) * exchangeRate + fee).toFixed(2) : '0.00';

    const handlePurchase = () => {
        alert(`Purchased ${amount} ${currency}`);
    };

    return (
        <div className="flex flex-col items-center justify-center my-5 p-4">
            <h1 className="flex justify-center items-center text-[30px] md:text-[40px] lg:text-[50px] w-full font-extrabold text-red1 mb-2 md:mb-5">
                Purchase GUAPCoin
            </h1>
            <div className="bg-gray-900 mt-5 rounded-2xl shadow-xl p-8 w-full max-w-md">

                {/* Currency Amount Input */}
                <div className="mb-6">
                    <label className="text-lg text-gray-300 block mb-2">Amount to Purchase:</label>
                    <div className="flex items-center border border-gray-300 rounded-lg p-2">
                        <FaDollarSign className="text-red1 text-xl mx-2" />
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full p-2 focus:outline-none bg-transparent "
                            placeholder="Enter amount in USD"
                        />
                    </div>
                </div>

                {/* Currency Selection */}
                <div className="mb-6">
                    <label className="text-lg text-gray-300 block mb-2">Select Currency:</label>
                    <div className="flex items-center border border-gray-300 rounded-lg p-2">
                        <FaCoins className="text-red1 text-xl mx-2" />
                        <select
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            className="w-full p-2 text-gray-400 focus:outline-none bg-transparent "
                        >
                            <option value="USD ">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                            <option value="JPY">JPY</option>
                        </select>
                    </div>
                </div>

                {/* Purchase Summary */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-700">Purchase Summary:</h3>
                    <div className="mt-2 py-4 px-4 bg-gray-700 border border-gray-300 rounded-lg">
                        <p className="text-red1 flex justify-between"><strong className="text-gray-300">Amount:</strong> {amount || '0.00'} {currency}</p>
                        <p className="text-red1 flex justify-between"><strong className="text-gray-300">Exchange Rate:</strong> {exchangeRate}</p>
                        <p className="text-red1 flex justify-between"><strong className="text-gray-300">Fee:</strong> ${fee}</p>
                        <p className="text-red1 flex justify-between mt-4"><strong className="text-gray-300">Total Cost:</strong> ${totalCost} USD</p>
                    </div>
                </div>

                {/* Purchase Button */}
                <button
                    onClick={handlePurchase}
                    className="w-full bg-red1 text-white font-bold py-3 rounded-lg"
                >
                    Purchase Now
                </button>
            </div>
        </div>
    );
}

