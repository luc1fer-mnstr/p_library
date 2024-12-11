import React from 'react'
import './dashboard.css'
import SideBar from './components/siderBar/SideBar'
import Body from './components/body/Body'


function Dashboard() {
  return (
    <div className='dashboard flex'>
      <div className="dashboardContainer flex">
        <SideBar />
        <Body />
      </div>
    </div>
  )
}

export default Dashboard
