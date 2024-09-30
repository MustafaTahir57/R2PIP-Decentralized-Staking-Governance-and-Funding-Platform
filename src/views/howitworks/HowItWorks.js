import React from 'react'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import StepByStepGuid from '../../components/howitworks/StepByStepGuid';
import HeroGuide from '../../components/howitworks/HeroGuide';
import BusinessInstructions from '../../components/howitworks/BusinessInstructions';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';


export default function HowItWorks() {
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
        <HeroGuide/>
        <BusinessInstructions/>
    </div>
  )
}
