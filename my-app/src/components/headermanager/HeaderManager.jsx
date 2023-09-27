import React, { useEffect, useState } from 'react'
import "../headermanager/HeaderManager.css"
import { useDispatch, useSelector } from 'react-redux';
import { getUser, logout } from "../feature/user/userSlice"
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const HeaderManager = (props) => {
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

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <header className='header-manager'>
      <div className='container'>
        <div className="logo">
        </div>
        <p className='title'>Seller Channel</p>
      </div>

      <ul className="list-option">
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
                          <FiLogOut />
                          <a href="" onClick={() => handleLogout()}>Log out</a>
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

export default HeaderManager