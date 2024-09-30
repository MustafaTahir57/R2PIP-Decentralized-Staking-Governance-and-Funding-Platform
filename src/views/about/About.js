import React from 'react'
import Overview from '../../components/about/Overview'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Mission from '../../components/about/Mission';
import Vision from '../../components/about/Vision';
import FoundationalConcepts from '../../components/about/FoundationalConcepts';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';


export default function About() {
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
      <Overview/>
      <Mission/>
      <Vision/>
      <FoundationalConcepts/>
    </div>
  )
}
