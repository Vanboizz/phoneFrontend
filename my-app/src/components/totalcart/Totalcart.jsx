import React from 'react'
import "../totalcart/Totalcart.css"
import PropTypes from 'prop-types'

const Totalcart = ({ text__btn }) => {
    return (
        <div className='total-cart'>
            <div className='total-cart__title'>
                <p className='title__text'>Total money temporary:</p>
                <p className='title__price'>10.990.000 ₫</p>
            </div>

            <div className='total-cart__btn-submit'>
                <button className='btn-submit__order'>
                    {text__btn}
                </button>

                <a href='' className='btn-submit__add-product'>
                    CHOOSE ADD THE OTHER PRODUCT
                </a>
            </div>
        </div>
    )
}

Totalcart.propTypes = {
    text__btn: PropTypes.string
};

export default Totalcart

