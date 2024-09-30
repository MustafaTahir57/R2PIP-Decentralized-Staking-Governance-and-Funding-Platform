import React from 'react';
import { FaFacebook, FaTiktok, FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebook size={24} />, url: 'https://www.facebook.com/rise2prosperity' },
    { name: 'TikTok', icon: <FaTiktok size={24} />, url: 'https://www.tiktok.com/@rise2prosper' },
    { name: 'LinkedIn', icon: <FaLinkedin size={24} />, url: 'https://www.linkedin.com/in/Rise2Prosperity' },
    { name: 'Telegram', icon: <FaTelegram size={24} />, url: 'https://t.me/rise2prosperity' },
    { name: 'WhatsApp', icon: <FaWhatsapp size={24} />, url: 'https://chat.whatsapp.com/rise2prosperity' },
  ];

  return (
    <div className="px-2 md:px-6 py-4 mx-auto bg-[#0d0d0d] mt-12 w-full">
      <div className="flex flex-col items- justify-between md:flex-row px-4">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold py-2 text-red1">Rise2Prosperity</h2>
          <div>
            <ul className="flex flex-wrap gap-5">
              <li><Link to="/about" className=" header text-gray-300">About</Link></li>
              <li><Link to="/how-it-works" className="header text-gray-300">How It Works</Link></li>
              <li><Link to="/features" className="header text-gray-300">Features</Link></li>
              <li><Link to="/blogs" className="header text-gray-300">Blog</Link></li>
              <li><Link to="/contact" className="header text-gray-300">Contact Us</Link></li>
            </ul>
          </div>          </div>

        <div className="flex justify-end items-end space-x-6 pb-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red1"
            >
              {link.icon}
            </a>
          ))}

        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-2 border-t py-2 border-gray-700 md:flex-row">
        <p className="text-gray-400">&copy; 2024 <span className='cursor-pointer text-red1'>Rise2Prosperity.</span>  All rights reserved.</p>

      </div>
    </div>

  );
}

export default Footer;
