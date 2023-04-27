import React, { useEffect, useState } from 'react'
import "../header/Header.css"
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../feature/user/userSlice"
import { FaSearch, FaUserCircle  } from "react-icons/fa";
import { FiLogOut  } from "react-icons/fi";

const Header = () => {
  const { cart, quantityCart } = useSelector((state) => state.cart);
  const { accessToken } = useSelector((state) => state.user)
  const [isShow, setIsShow] = useState(false)
  const dispatch = useDispatch()


  return (
    <header>
      <div className="logo" onClick={() => window.location.href = "/"}>
      </div>

      <div className="search">
        <FaSearch className="search__icon-search" />

        <input className='search__input-search' type="text" placeholder="Find what that on Smartphone..." />
      </div>

      <ul className="list-option">
        <li className='list-option__item'>
          <a className='list-option__option' href='/'>
            <div className="option__icon-home option__home"></div>
            <p>Home</p>
          </a>
        </li>

        <li className='list-option__item list-option__item-phone'>
          <a className='list-option__option'>
            <div className="option__icon-phone option__phone"></div>
            <p>Phone</p>
          </a>

          <ul className='option__subnav'>
              <li><a href=''>IPhone 13 Promax</a></li>
              <li><a href=''>Samsung Galaxy A71</a></li>
              <li><a href=''>Lenovo</a></li>
              <li><a href=''>Oppo New 3</a></li>
          </ul>
        </li>

        <li className='list-option__item'>
          <a className='list-option__option' >
            <div className="option__icon-pen option__pen"></div>
            <p>About Us</p>
          </a>
        </li>

        <li className='list-option__item'>
          <a className='list-option__option'>
            <div className="option__icon-cart option__cart option_contain-circle">
              <div className="circle-yellow">{quantityCart}</div>
            </div>
            <p>Cart</p>
          </a>
        </li>

        <li className='list-option__item list-option__item-login'>
          {
            accessToken
              ?
              <div>
                {
                  <div>
                    <a className='list-option__option list-option__login' onClick={() => {
                      setIsShow(!isShow)
                    }} >
                      <span className="option__icon-user option__user"></span>
                      <p>Login</p>
                      <div className="option__icon-arrow-user option__phone">
                      </div>
                    </a>
                    {
                      isShow && <ul className='option__subnav'>
                        <li><a href="">My profile</a></li>
                        <li><a href="" onClick={() => dispatch(logout())}>Logout</a></li>
                      </ul>
                    }
                  </div>
                }
              </div>
              :
              <a className='list-option__option list-option__login' href='/login'>
                <span className="option__icon-user option__user"></span>
                <p>Login</p>
              </a>
          }

        </li>

      </ul>
    </header>

  )
}

export default Header