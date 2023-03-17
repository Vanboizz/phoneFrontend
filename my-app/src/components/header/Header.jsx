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
        <FaSearch className="search__icon-search" />

        <input className='search__input-search' type="text" placeholder="Tìm gì đó trên Smart Phone..." />
      </div>

      <div className="list-option">

        <div className='list-option__option'>
          <div className="option__icon-home option__home"></div>
          <a>Home</a>
        </div>

        <div className='list-option__option'>
          <div className="option__icon-phone option__phone"></div>
          <a>Phone</a>
        </div>

        <div className='list-option__option'>
          <div className="option__icon-pen option__pen"></div>
          <a>About Us</a>
        </div>

        <div className='list-option__option'>
          <div className="option__icon-cart option__cart option_contain-circle">
            <div className="circle-yellow">0</div>

          </div>
          <a>Cart</a>
        </div>

        <div className='list-option__option'>
          <div className="option__icon-user option__user"></div>
          <a>Login</a>
        </div>
      </div>
    </header>
    
  )
}

export default Header