import React from 'react'
import './dashboard.css'
import SideBar from './components/siderBar/SideBar'
import { Outlet } from 'react-router-dom'


function Dashboard() {
  return (
    <div className='dashboard flex'>
      <div className="dashboardContainer flex">
        <SideBar />
        <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard
