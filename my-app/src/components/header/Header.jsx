import React from 'react'
import "../header/Header.css"
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="logo">
      </div>

      <div className="search">
        <FaSearch className="search__icon-search" />

        <input className='search__input-search' type="text" placeholder="Find what that on Smartphone..." />
      </div>

      <ul className="list-option">
        <li className='list-option__item'>
          <a className='list-option__option' href=''>
            <div className="option__icon-home option__home"></div>
            <p>Home</p>
          </a>
        </li>

        <li className='list-option__item'>
          <a className='list-option__option' href=''>
            <div className="option__icon-phone option__phone"></div>
            <p>Phone</p>
          </a>
        </li>

        <li className='list-option__item'>
          <a className='list-option__option' href=''>
            <div className="option__icon-pen option__pen"></div>
            <p>About Us</p>
          </a>
        </li>

        <li className='list-option__item'>
          <a className='list-option__option' href=''>
            <div className="option__icon-cart option__cart option_contain-circle">
              <div className="circle-yellow">0</div>
            </div>
            <p>Cart</p>
          </a>
        </li>

        <li className='list-option__item list-option__item-login'>

          <a className='list-option__option list-option__login' href=''>
            <span className="option__icon-user option__user"></span>
            <p>Login</p>
            <div className="option__icon-arrow-user option__phone"></div>
          </a>

          <ul className='option__subnav'>
              <li><a href="">My profile</a></li>
              <li><a href="">Logout</a></li>
          </ul>

        </li>

      </ul>
    </header>

  )
}

export default Header