import React from 'react'
import "../footer/Footer.css"
import { FaGithub, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='wrapper'>

      <div className="line">
      </div>

      <div className="content">
        <div className="list-1">

          <div className="list-1__tspblack"></div>

          <a className="list-1__component" href=''>
              <FaGithub className='component__logo' />
              <p>Github</p>
            </a>

          <br />
          <a className="list-1__component" href=''>
              <FaFacebook className='component__logo' />
              <p>Facebook</p>
            </a>

          <br />
          <a className="list-1__component" href=''>
              <FaInstagram className='component__logo' />
              <p>Instagram</p>
            </a>

          <br />
          <a className="list-1__component" href=''>
              <FaYoutube className='component__logo' />
              <p>Youtube</p>
            </a>

        </div>

        <div className="list-2">
          <h2 className='list-2__title'>Products</h2>
          <a href="" className='list-2__title__item'>Iphone</a>
          <br />
          <a href="" className='list-2__title__item'>Samsung Galaxy</a>
          <br />
          <a href="" className='list-2__title__item'>Realme</a>
          <br />
          <a href="" className='list-2__title__item'>Vivo</a>
          <br />
          <a href="" className='list-2__title__item'>Oppo</a>
          <br />
          <a href="" className='list-2__title__item'>Other</a>
        </div>

        <div className="list-3">
          <h2 className='list-3__title'>Contact</h2>

          <div className='list-3__title__item'>
            Email: 
            <a  href='' className=' list-3__title__email'> example@email.com</a>
          </div>
          <br />
          <p  className='list-3__title__item'>Hotline: 1900 0000</p>
          <br />
          <p  className='list-3__title__item'>Address: 540 ap Tay, Tan Thanh , Thanh Binh, Dong Thap</p>
        </div>
      </div>
    </div>
  )
}

export default Footer