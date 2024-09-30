import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import img1 from "../../assets/img/guap.png";
import R2PIP from "../../assets/img/output.png";

export default function ShopR2PIP() {
    const shop = [
        {
            logo: img1,
            heading: "Purchase GUAPCoin",
            desc: "Purchase R2PIP Token",
            link: "/presale"
        },
        {
            logo: R2PIP,
            heading: "Swap R2PIP for GUAP",
            desc: "Swap R2PIP For GUAP",
            link: "/swap",
        },
        {
            logo: R2PIP,
            heading: "Shop With R2PIP",
            desc: "Save 1-3% Cash Back, Earn Points with Purchase, Stake R2PIP Token, Swap For GUAP",
            link: "/stake",
        },
    ];


    return (
        <section
            id='shop'
            data-aos="zoom-in-up"
            className='flex flex-col md:flex-row items-center justify-center gap-6 mt-16'>
            {shop.map((item, index) => (
                <Link
                    to={item.link}
                    key={index}
                    style={{ textDecoration: 'none' }}
                    className='w-full'>
                    <div className='p-4 rounded-lg shadow-lg flex flex-col items-center text-center justify-center w-full mx-auto'>
                        <img src={item.logo} alt={item.heading} className='h-28 w-28 rounded-full mx-auto mb-4' />
                        <h3 className='text-xl text-red1 font-semibold mb-2'>{item.heading}</h3>
                        <p className='text-gray-300'>{item.desc}</p>
                    </div>
                </Link>
            ))}
        </section>
    );
}
