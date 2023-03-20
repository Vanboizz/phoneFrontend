import React from 'react'
import "../header/Header.css"
import { FaSearch} from "react-icons/fa";
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

        <a className='list-option__option' href=''>
          <div className="option__icon-home option__home"></div>
          <p>Home</p>
        </a>

        <a className='list-option__option' href=''>
          <div className="option__icon-phone option__phone"></div>
          <p>Phone</p>
        </a>

        <a className='list-option__option' href=''>
          <div className="option__icon-pen option__pen"></div>
          <p>About Us</p>
        </a>

        <a className='list-option__option' href=''>
          <div className="option__icon-cart option__cart option_contain-circle">
            <div className="circle-yellow">0</div>

          </div>
          <p>Cart</p>
        </a>

        <a className='list-option__option' href=''>
          <div className="option__icon-user option__user"></div>
          <p>Login</p>
        </a>
      </div>
    </header>
    
  )
}

export default Header