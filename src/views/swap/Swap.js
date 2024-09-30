import React, { useEffect, useState } from 'react';
import { SiConvertio } from "react-icons/si";
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export default function Swap() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
    const [amount, setAmount] = useState('');
    const [currencyFrom, setCurrencyFrom] = useState('R2PIP');
    const [currencyTo, setCurrencyTo] = useState('GUAP');
    const [amountFrom, setAmountFrom] = useState('');
    const [amountTo, setAmountTo] = useState('');
    // const handleSwap = () => {
    //     alert(`Swapping ${amount} ${currencyFrom} for ${currencyTo}`);
    // };
    const handleSwap = () => {
        // Swap currencies
        const tempCurrency = currencyFrom;
        setCurrencyFrom(currencyTo);
        setCurrencyTo(tempCurrency);
    
        // Swap amounts
        const tempAmount = amountFrom;
        setAmountFrom(amountTo);
        setAmountTo(tempAmount);
      };
    return (
        <div className='flex flex-col items-center my-5 justify-center min-h-screen h-full mx-1'>
            <h1 className="flex justify-center items-center text-[30px] md:text-[40px] lg:text-[50px] w-full font-extrabold text-red1 mb-2 md:mb-5">
                Swap Your Currency
            </h1>
            <div className='bg-gray-900 shadow-lg rounded-2xl p-8 mt-6 w-full max-w-md'>
                <div className='text-center mb-6'>
                    <h2 className='text-2xl font-bold text-red1 mb-2'>Currency Swap</h2>
                    <p className='text-gray-300'>Select the amount and currencies to swap</p>
                </div>

                <div className='flex flex-col gap-4 items-center justify-between mb-6'>
      {/* First select */}
      <select
        value={currencyFrom}
        onChange={(e) => setCurrencyFrom(e.target.value)}
        className='border border-gray-300 rounded-lg w-full text-gray-400 bg-transparent p-3 focus:outline-none'
      >
        <option value='R2PIP'>R2PIP</option>
        <option value='GUAP'>GUAP</option>
      </select>

      {/* First input field */}
      <input
        type='number'
        value={amountFrom}
        onChange={(e) => setAmountFrom(e.target.value)}
        className='rounded-lg p-3 w-full text-gray-300 bg-transparent border focus:outline-none'
        placeholder='0.0'
      />

      {/* Arrow icon */}
      <div onClick={handleSwap} className="cursor-pointer">
        <SiConvertio size={50} className='text-red1' />
      </div>

      {/* Second select */}
      <select
        value={currencyTo}
        onChange={(e) => setCurrencyTo(e.target.value)}
        className='border border-gray-300 rounded-lg w-full text-gray-400 bg-transparent p-3 focus:outline-none'
      >
        <option value='GUAP'>GUAP</option>
        <option value='R2PIP'>R2PIP</option>
      </select>

      {/* Second input field */}
      <input
        type='number'
        value={amountTo}
        onChange={(e) => setAmountTo(e.target.value)}
        className='rounded-lg p-3 w-full text-gray-300 bg-transparent border focus:outline-none'
        placeholder='0.0'
      />
    </div>

                <button
                    onClick={handleSwap}
                    className='bg-red1 text-white font-bold py-3 rounded-lg w-full '
                >
                    Swap Now
                </button>
            </div>
        </div>
    );
}
