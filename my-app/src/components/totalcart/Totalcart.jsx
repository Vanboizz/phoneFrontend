import React from 'react'
import "../totalcart/Totalcart.css"
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const Totalcart = ({ text__btn, handle__checkout }) => {
    const { totalPriceCart } = useSelector(state => state.cart)
    return (
        <div className='total-cart'>
            <div className='total-cart__title'>
                <p className='title__text'>Total money temporary:</p>
                <p className='title__price'>{totalPriceCart} ₫</p>
            </div>

            <div className='total-cart__btn-submit' >
                <button className='btn-submit__order' type='submit' onClick={handle__checkout} >
                    {text__btn}
                </button>

                <a href='/home' className='btn-submit__add-product'>
                    CHOOSE ADD THE OTHER 
                    PRODUCT
                </a>
            </div>
        </div>
    )
}

Totalcart.propTypes = {
    text__btn: PropTypes.string,
    handle__checkout: PropTypes.func,
};

export default Totalcart

