import React from 'react'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import BlogSection from '../../components/blog/BlogSection';
import ResourcesSection from '../../components/blog/ResourcesSection';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export default function Blogs() {
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
            <BlogSection />
            <ResourcesSection/>
        </div>
    )
}
