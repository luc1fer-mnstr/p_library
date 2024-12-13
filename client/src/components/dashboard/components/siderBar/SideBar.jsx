import React, { useState } from 'react';
import './sideBar.css';
import { Link } from 'react-router-dom';

// import images
import logo from '../../assets/logo.png';

// import icons
import { IoMdSpeedometer,IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { MdDeliveryDining, MdOutlinePermContactCalendar } from 'react-icons/md';
import { BsCreditCard2Front, BsQuestionCircle, BsTrophy } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { BiTrendingUp } from 'react-icons/bi';
import { AiOutlineBook } from 'react-icons/ai';
import { FaListUl, FaPlusCircle } from 'react-icons/fa';

function SideBar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen  (!isDropdownOpen);

  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src={logo} alt="Image name" />
        <h2>Lucifer.M</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">QUICK MENU</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <Link to="/dashboard" className="menuLink flex">
              <IoMdSpeedometer className="icon" />
              <span className="smallText">Dashboard</span>
            </Link>
          </li>
          <li className="listItem">
            <Link to="#" className="menuLink flex">
              <BiTrendingUp className="icon" />
              <span className="smallText">Trends</span>
            </Link>
          </li>

          {/* Add Books with Dropdown */}
          <li className="listItem">
            <div className="menuLink flex" onClick={toggleDropdown}>
              <AiOutlineBook className="icon" />
              <span className="smallText">Books</span>
              {isDropdownOpen ? <IoIosArrowDown  className='icon-dropdown'/> : <IoIosArrowForward className='icon-dropdown'/>}
            </div>
            {isDropdownOpen && (
              <ul className="dropdownMenu">
                <li className='flex'><FaListUl className="icon" /> <Link to="/dashboard/book-list" className="dropdownItem">Books List</Link></li>
                <li className='flex'><FaPlusCircle className="icon" /> <Link to="/dashboard/add-book" className="dropdownItem">Add New Book</Link></li>
              </ul>
            )}
          </li>

          <li className="listItem">
            <div className="menuLink flex">
              <BsTrophy className="icon" />
              <span className="smallText">Products</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="settingDiv">
        <h3 className="divTitle">SETTINGS</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <Link to="" className="menuLink flex">
              <AiOutlinePieChart className="icon" />
              <span className="smallText">Charts</span>
            </Link>
          </li>
          <li className="listItem">
            <Link to="" className="menuLink flex">
              <MdDeliveryDining className="icon" />
              <span className="smallText">My Orders</span>
            </Link>
          </li>
          <li className="listItem">
            <Link to="" className="menuLink flex">
              <MdOutlinePermContactCalendar className="icon" />
              <span className="smallText">Contact</span>
            </Link>
          </li>
          <li className="listItem">
            <Link to="" className="menuLink flex">
              <BsCreditCard2Front className="icon" />
              <span className="smallText">Billing</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <h3>Help Center</h3>
          <p>
            Having trouble in Lucifer.M, please contact us for more questions.
          </p>
          <button className="btn">Go to help center</button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
