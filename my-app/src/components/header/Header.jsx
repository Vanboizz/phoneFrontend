import React, { useEffect, useState } from 'react'
import "../header/Header.css"
import { useDispatch, useSelector } from 'react-redux';
import { getUser, logout } from "../feature/user/userSlice"
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { BsList } from "react-icons/bs"
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = (props) => {
  const { quantityCart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user)

  const accessToken = localStorage.getItem("accessToken")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [category, setCategory] = useState([])

  useEffect(() => {
    if (accessToken) {
      dispatch(getUser(accessToken))
    }

    axios.get("http://localhost:8000/product/getcategory")
      .then(res => {
        setCategory(res.data)
      })
      .catch(error => console.log(error))

  }, [])

  return (
    <header>
      <div className="logo" onClick={() => navigate("/")}>
      </div>

      <div className="search">
        <FaSearch className="search__icon-search" />
        <input onChange={(e) => props.parentCallback(e.target.value)} className='search__input-search' type="text" placeholder="Find what that on Smartphone..." />
      </div>

      <ul className="list-option">
        <li className='list-option__item'>
          <a className='list-option__option' href='/admin/register'>
            <div className="option__icon-seller option__seller"></div>
            <p>Seller Channel</p>
          </a>
        </li>

        <li className='list-option__item'>
          <a className='list-option__option' href='/'>
            <div className="option__icon-home option__home"></div>
            <p>Home</p>
          </a>
        </li>

        <li className='list-option__item list-option__item-phone'>

          <div>
            <a className='list-option__option'>
              <div className="option__icon-phone option__phone"></div>
              <p>Phone</p>
            </a>
            <ul className='option__subnav option__subnav-phone'>
              {
                category ?
                  category.map((cateitem, index) => (
                    <li key={index}>
                      <a href={`http://localhost:3000/category/${cateitem.idcate}`}>{cateitem.namecate}</a>
                    </li>

                  ))
                  : null
              }
            </ul>
          </div>
        </li>

        <li className='list-option__item'>
          <a className='list-option__option' onClick={() => navigate("/cart")}>
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
                  <>
                    <a className='list-option__option list-option__login'>
                      <span className="option__icon-user option__user"></span>
                      <p>{user && user.length > 0 ? user[0].fullname : "Login"}</p>
                      <div className="option__icon-arrow-user option__phone">
                      </div>
                    </a>
                    {

                      <ul className='option__subnav option__subnav-pro'>
                        <li>
                          <FaUserCircle className='option__subnav-profile' />
                          <a href="/profile">My profile</a>
                        </li>
                        <li>
                          <BsList className='option__subnav-profile' />
                          <a href="/listfavourite">Favourite</a>
                        </li>
                        <li>
                          <FiLogOut />
                          <span onClick={() => dispatch(logout())}>Log out</span>
                        </li>
                      </ul>
                    }
                  </>
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