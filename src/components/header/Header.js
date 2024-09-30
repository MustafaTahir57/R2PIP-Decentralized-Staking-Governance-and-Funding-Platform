import React, { useContext, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-router-dom";
import logo from "../../assets/img/output.png";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useAccount, useDisconnect } from 'wagmi';
import { AuthUserContext } from '../../conext';

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const history = useHistory();
  const { setWalletAddress } = useContext(AuthUserContext);
  const { address, isConnected } = useAccount();
  const Menu = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    if (isConnected && address) {
      setWalletAddress(address);
    }

  }, [isConnected, address]);

  return (
    <nav className="flex justify-between items-center py-2 bg-black fixed top-0 left-0 w-full z-50 sm:px-2 md:px-8 lg:px-12">
      <div className="flex gap-x-4 items-center">
        <img src={logo} alt='logo of the site' className='h-24 w-24' />

        <Link
          to="/"
          className="text-red1 text-xl flex items-center gap-3 font-bold no-underline header-mob"
        >
          <p className='text-base'>Rise2Prosperity Incentive Program</p>
        </Link>
      </div>
      <div className='hidden lg:flex justify-between items-center gap-x-2'>
        <Link to="/" className="header">
          <p className="text-white">Home</p>
        </Link>
        {/* <a href="#road-map" className='header'>

          <p className="text-[16px] text-white"
            onClick={() => {
              history.push("/#road-map");
            }}>
            Roadmap
          </p>
        </a> */}
        <a href="#whitepaper" className='header'>

          <p className="text-[16px] text-white"
            onClick={() => {
              history.push("/#whitepaper");
            }}>
            Whitepaper
          </p>
        </a>
        {/* <a href="#tokenomics" className="header">
          <p className="text-white"
            onClick={() => {
              history.push("/#tokenomics");
            }}
          >
            Tokenomics
          </p>
        </a> */}
        <Link to="/stake" className="header">
          <p className="text-white">Staking</p>
        </Link>
        <Link to="/presale" className="header">
          <p className="text-white">Presale</p>
        </Link>
        <Link to="/swap" className="header">
          <p className="text-white">Swap</p>
        </Link>
        <Link to="/vote" className="header">
          <p className="text-white">Vote</p>
        </Link>
        <Link to="/about" className="header">
          <p className="text-white">About Us</p>
        </Link>
        <Link to="/contact" className="header">
          <p className="text-white">Contact</p>
        </Link>

        <w3m-button />
        {/* <button className='text-white bg-red1 px-3 py-2 rounded-full'>Connect Wallet</button> */}
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="block lg:hidden relative z-30">
        {toggle ? (
          <IoMdClose
            size={30}
            onClick={Menu}
            className='cursor-pointer text-white hover:text-red1'
          />
        ) : (
          <AiOutlineMenu
            size={30}
            onClick={Menu}
            className='cursor-pointer text-white hover:text-red1'
          />
        )}
        <nav className={`fixed top-[100px] left-0 pl-4 w-full bg-black text-white transition-transform duration-1000 z-50 ${toggle ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>
          <Link to="/" onClick={Menu} className="header-mob">
            <p className="text-[16px] mt-3 my-3">Home</p>
          </Link>
          <a
            href="#roadmap"
            className='header-mob'
            onClick={Menu}>

            <p className="text-[16px] text-white header-mob"
              onClick={() => {
                history.push("/#roadmap");
              }}>
              Roadmap
            </p>
          </a>
          <a
            href="#whitepaper"
            className='header-mob'
            onClick={Menu}>
            <p
              onClick={() => {
                history.push("/#whitepaper");
              }} className="text-[16px] mt-3 my-3 no-underline">Whitepaper</p>
          </a>
          <a
            href="#tokenomics"
            className='header-mob'
            onClick={Menu}>
            <p className="text-white header-mob"
              onClick={() => {
                history.push("/#tokenomics");
              }}
            >
              Tokenomics
            </p>
          </a>
          <Link to="/stake" onClick={Menu} className="header-mob">
            <p className="text-[16px] mt-3 my-3 no-underline">Staking</p>
          </Link>
          <Link to="/presale" onClick={Menu} className="header-mob">
            <p className="text-[16px] mt-3 my-3 no-underline">Presale</p>
          </Link>
          <Link to="/swap" onClick={Menu} className="header-mob">
            <p className="text-[16px] mt-3 my-3 no-underline">Swap</p>
          </Link>
          <Link to="/vote" onClick={Menu} className="header-mob">
            <p className="text-[16px] mt-3 my-3 no-underline">Vote</p>
          </Link>
          <Link to="/about" onClick={Menu} className="header-mob">
            <p className="text-[16px] mt-3 my-3 no-underline">About Us</p>
          </Link>
          <Link to="/contact" onClick={Menu} className="header-mob">
            <p className="text-[16px] mt-3 my-3 no-underline">Contact</p>
          </Link>

          <w3m-button />
        </nav>

      </div>
    </nav>
  );
}

export default Navbar;


