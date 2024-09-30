import React from 'react'

export default function DashboardSidebar() {
    const dashboardcomponent = [
        { heading: "Enrollment" },
        { heading: "Business Dashboard" },
        { heading: "Readme & Reward" },
        { heading: "Blog" },
        { heading: "Resources" },
        { heading: "Contact" }
    ];

    return (
        <div>
            <ul className='h-[60vh] flex flex-col justify-between p-3'>
                {dashboardcomponent.map((item, index) => (
                    <li
                    className='py-2 text-gray-300 font-semibold'
                     key={index}>{item.heading}</li>
                ))}
            </ul>
        </div>
    )
}
