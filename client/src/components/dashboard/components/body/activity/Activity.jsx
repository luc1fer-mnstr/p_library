import React from 'react'
import './activity.css'

// icons
import {BsArrowRightShort} from 'react-icons/bs'

// images
import user11 from '../../../assets/user11.jpg'
import user12 from '../../../assets/user12.jpg'
import user13 from '../../../assets/user13.jpg'
import user14 from '../../../assets/user14.jpg'
import user10 from '../../../assets/user10.jpg'

function Activity() {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className='btn flex'>
            See All
            <BsArrowRightShort className='icon' />
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
            <img src={user11} alt="Customer Image" />
            <div className="customerDetails">
              <span className="name">Johsoua</span>
              <small>Ordered a new plant</small>
            </div>
            <div className="duration">
              2 min ago
            </div>
        </div>
        <div className="singleCustomer flex">
            <img src={user12} alt="Customer Image" />
            <div className="customerDetails">
              <span className="name">Honsaw</span>
              <small>Ordered a new plant</small>
            </div>
            <div className="duration">
              2 min ago
            </div>
        </div>
        <div className="singleCustomer flex">
            <img src={user13} alt="Customer Image" />
            <div className="customerDetails">
              <span className="name">Eris</span>
              <small>Ordered a new plant</small>
            </div>
            <div className="duration">
              2 min ago
            </div>
        </div>
        <div className="singleCustomer flex">
            <img src={user14} alt="Customer Image" />
            <div className="customerDetails">
              <span className="name">Susan</span>
              <small>Ordered a new plant</small>
            </div>
            <div className="duration">
              2 min ago
            </div>
        </div>
        <div className="singleCustomer flex">
            <img src={user10} alt="Customer Image" />
            <div className="customerDetails">
              <span className="name">Monchaw</span>
              <small>Ordered a new plant</small>
            </div>
            <div className="duration">
              2 min ago
            </div>
        </div>
      </div>
    </div>
  )
}

export default Activity
