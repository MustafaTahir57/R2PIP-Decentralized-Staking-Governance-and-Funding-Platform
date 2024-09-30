import React from 'react'
import DashboardHero from './DashboardHero'
import DashboardSidebar from './DashboardSidebar'

export default function DashboardStructure() {
  return (
    <div className='flex flex-col md:flex-row gap-5 mt-12 w-full'>
      <div>
        <DashboardSidebar/>
      </div>
      <div className='flex flex-col'>
      <h6 className="text-[30px] text-center w-full font-extrabold text-red1 mb-2 md:mb-5">
          Welcome Muhammad, You are On the Rise
        </h6>
        <DashboardHero />
      </div>
    </div>
  )
}
