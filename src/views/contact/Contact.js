import React from 'react'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ContactUs from '../../components/contact/ContactUs';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';


export default function Contact() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
    
    useEffect(() => {
        Aos.init({
            duration: 1500,
            delay: 400,
        });
    }, []);
    return (
        <div className='overflow-x-hidden'>
            <ContactUs />
        </div>
    )
}
