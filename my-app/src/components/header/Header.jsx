import React from 'react'
import "../header/Header.css"
import { FaSearch, FaHome, FaChevronDown, FaPen, FaCartArrowDown, FaRegUserCircle } from "react-icons/fa";
// xoa': font awesome

const Header = () => {
  return (
    <header>
      <div className="logo">
      </div>

      <div className="search">
        <FaSearch className="icon-search" />

        <input className='input-search' type="text" placeholder="Tìm gì đó trên Smart Phone..." />
      </div>

      <div className="list-option">
        
        <div className='option'>
          <div className="icon-home home"></div>
          <a>Home</a>
        </div>

        <div className='option'>
          <div className="icon-phone phone"></div>
          <a>Phone</a>
        </div>

        <div className='option'>
          <div className="icon-pen pen"></div>
          <a>About Us</a>
        </div>

        <div className='option'>
          <div className="icon-cart cart"></div>
          <a>Cart</a>
        </div>

        <div className='option'>
          <div className="icon-user user"></div>
          <a>Login</a>
        </div>
      </div>
    </header>
  )
}

export default Header