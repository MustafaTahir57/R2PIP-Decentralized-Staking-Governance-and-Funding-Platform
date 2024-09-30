import React from 'react'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import DashboardStructure from '../../components/dashboard/DashboardStructure'

export default function Dashboard() {
    useEffect(() => {
        Aos.init({
            duration: 1500,
            delay: 400,
        });
    }, []);
    return (
        <div>
            <DashboardStructure />
        </div>
    )
}
