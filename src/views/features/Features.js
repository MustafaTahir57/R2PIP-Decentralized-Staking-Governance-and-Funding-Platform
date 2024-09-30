import React from 'react'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import FeatureHero from '../../components/features/FeatureHero';
import IncentivizedLearning from '../../components/features/IncentivizedLearning';
import BlockchainRewards from '../../components/features/BlockchainRewards';
import CommunityService from '../../components/features/CommunityService';
import BusinessCollaboration from '../../components/features/BusinessCollaboration';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export default function Features() {
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
      <FeatureHero/>
      <IncentivizedLearning/>
      <BlockchainRewards/>
      <CommunityService/>
      <BusinessCollaboration/>
    </div>
  )
}
