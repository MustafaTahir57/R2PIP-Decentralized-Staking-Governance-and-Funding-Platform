import React from 'react'
import Hero from '../../components/home/Hero'
import Features from '../../components/home/Features'
import Testimonials from '../../components/home/Testimonilas'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ShopR2PIP from '../../components/home/ShopR2PIP';
import RoadMap from '../../components/home/RoadMap';
import Tokenomics from '../../components/home/Tokenomics';
import FAQs from '../../components/home/FAQs';
import Partners from '../../components/home/Partners';
import WhitePaper from '../../components/home/WhitePaper';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export default function Home() {
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
    <div>
      	<div className='overflow-x-hidden'>
		<Hero/>
    <ShopR2PIP/>
		<Features/>
    <RoadMap/>
    <WhitePaper/>
    <Tokenomics/>
    <Partners/>
		<Testimonials/>
    <FAQs/>
	</div>
    </div>
  )
}
