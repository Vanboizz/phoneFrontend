import React, { useEffect } from 'react'
import '../cart/Cart.css'
import { GrFormClose } from "react-icons/gr";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from 'react';
import Templatecart from '../../components/templatecart/Templatecart';
import Header from '../../../src/components/header/Header'
import Totalcart from '../../components/totalcart/Totalcart';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../components/feature/cart/cartSlice';

const Cart = () => {
    const [count, setQuantity] = useState(1)
    const { cart } = useSelector(state => state.cart)
    return (
        <>
            <Header></Header>
            <Templatecart text__my='My Cart' text__btn='PROCEED TO ORDER' >
                {/* <div className="product">
                    <div className='product__item'>
                        <img src={product.image[0]} alt="" className='item__img' />
                        <div className='item__info'>
                            <a className='info__name-pro'>{product.nameproducts}<span>{namesize}</span></a>
                            <div className='info__line-2'>
                                <p className='info__sale-price'>{(pricesize * product.discount) / 100}</p>
                                <div className='change-quantity'>
                                    <button onClick={() => {
                                        if (count > 1) setQuantity(count - 1)
                                    }} className='contain-minus'>
                                        <AiOutlineMinus className='minus' />
                                    </button>
                                    <input type="text" readonly="readonly" value={count} />
                                    <button onClick={() => setQuantity(count + 1)} className='contain-plus'>
                                        <AiOutlinePlus className='plus' />
                                    </button>
                                </div>
                            </div>
                            <div className='info__line-3'>
                                <p className='info__sale-regular'>{pricesize}₫</p>
                                <p className='sales'> {product.discount}%</p>
                            </div>
                            <GrFormClose className='info__icon' />
                        </div>
                    </div>
                </div> */}
            </Templatecart>
            <Totalcart text__btn='PROCEED TO ORDER' />
        </>
    )
}

export default Cart
