import React from 'react'
import './listing.css'

// icons
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

// images
import user3 from '../../../assets/user3.jpg'
import user4 from '../../../assets/user4.jpg'
import user5 from '../../../assets/user5.jpg'
import user6 from '../../../assets/user6.jpg'
import user7 from '../../../assets/user7.jpg'
import user8 from '../../../assets/user8.jpg'
import user9 from '../../../assets/user9.jpg'
import user10 from '../../../assets/user10.jpg'


function Listing() {
  return (
    <div className='listingSection'>

      <div className="heading flex">
        <h1>My Listings</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className='icon' />
        </button>
      </div>

      <div className="secContainer flex">

        <div className="singleItem">
          <AiFillHeart className='icon' />
          <img src={user3} alt="Image name" />
          <h3>Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon' />
          <img src={user4} alt="Image name" />
          <h3>Coffee</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon' />
          <img src={user5} alt="Image name" />
          <h3>Fern</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon' />
          <img src={user6} alt="Image name" />
          <h3>Spider</h3>
        </div>

      </div>

      <div className="sellers flex">
         <div className="topSellers">
            <div className="heading flex">
              <h3>Top Sellers</h3>
              <button className='btn flex'>
                See All <BsArrowRightShort className='icon' />
              </button>
            </div>

            <div className="card flex">
              <div className="users">
                <img src={user7} alt="User Image" />
                <img src={user8} alt="User Image" />
                <img src={user9} alt="User Image" />
                <img src={user10} alt="User Image" />
              </div>
              <div className="cardText">
                <span>
                  14,566 Plant sold <br/>
                  <small>
                    21 Sellers <span className='date'>7 Days</span>
                  </small>
                </span>
              </div>
            </div>
         </div>

         <div className="featuredSellers">
            <div className="heading flex">
              <h3>Featured Sellers</h3>
              <button className='btn flex'>
                See All <BsArrowRightShort className='icon' />
              </button>
            </div>

            <div className="card flex">
              <div className="users">
                <img src={user7} alt="User Image" />
                <img src={user9} alt="User Image" />
                <img src={user8} alt="User Image" />
                <img src={user10} alt="User Image" />
              </div>
              <div className="cardText">
                <span>
                  28,566 Plant sold <br/>
                  <small>
                    26 Sellers <span className='date'>31 Days</span>
                  </small>
                </span>
              </div>
            </div>
         </div>
      </div>

    </div>
  )
}

export default Listing
