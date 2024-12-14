import React from 'react'
import './listing.css'

// icons
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

// images
import img1 from '../../../assets/img1.jpg'
import img2 from '../../../assets/img2.jpg'
import img3 from '../../../assets/img3.jpg'
import img4 from '../../../assets/img4.jpg'
import img5 from '../../../assets/img5.jpg'
import img6 from '../../../assets/img6.jpg'
import img7 from '../../../assets/img7.jpg'
import img8 from '../../../assets/img8.jpg'


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
          <img src={img1} alt="Image name" />
          <h3>Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon' />
          <img src={img2} alt="Image name" />
          <h3>Coffee</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon' />
          <img src={img3} alt="Image name" />
          <h3>Fern</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon' />
          <img src={img4} alt="Image name" />
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
                <img src={img5} alt="User Image" />
                <img src={img6} alt="User Image" />
                <img src={img7} alt="User Image" />
                <img src={img8} alt="User Image" />
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
                <img src={img4} alt="User Image" />
                <img src={img5} alt="User Image" />
                <img src={img6} alt="User Image" />
                <img src={img7} alt="User Image" />
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
