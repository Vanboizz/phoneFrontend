import React, { useEffect } from 'react'
import '../cart/Cart.css'
import { GrFormClose } from "react-icons/gr";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from 'react';
import Templatecart from '../../components/templatecart/Templatecart';
import Header from '../../../src/components/header/Header'
import Totalcart from '../../components/totalcart/Totalcart';
import { useSelector } from 'react-redux';


const Cart = () => {
    const [count, setQuantity] = useState(1)
    const { cart } = useSelector(state => state.cart)
    console.log(cart);
    return (
        <>
            <Header></Header>
            <Templatecart text__my='My Cart' text__btn='PROCEED TO ORDER' >
                <div className="product">
                    {
                        cart ? cart.map((value, index) => (
                            <div className='product__item' key={index}>
                                <img src={value.image[0]} alt="" className='item__img' />
                                <div className='item__info'>
                                    <a className='info__name-pro'>{value.nameproducts}<span>{value.size[0].namesize}({value.size[0].color[0].namecolor})</span></a>
                                    <div className='info__line-2'>
                                        <p className='info__sale-price'>{(value.size[0].pricesize * value.discount) / 100}</p>
                                        <div className='change-quantity'>
                                            <button onClick={() => {
                                                if (count > 1) setQuantity(count - 1)
                                            }} className='contain-minus'>
                                                <AiOutlineMinus className='minus' />
                                            </button>
                                            <input type="text" readonly="readonly" value={value.quantity} />
                                            <button onClick={() => setQuantity(count + 1)} className='contain-plus'>
                                                <AiOutlinePlus className='plus' />
                                            </button>
                                        </div>
                                    </div>
                                    <div className='info__line-3'>
                                        <p className='info__sale-regular'>{value.size[0].pricesize}₫</p>
                                        <p className='sales'> {value.discount}%</p>
                                    </div>
                                    <GrFormClose className='info__icon' />
                                </div>
                            </div>
                        ))
                            : null
                    }

                </div>
            </Templatecart>
            <Totalcart text__btn='PROCEED TO ORDER' />
        </>
    )
}

export default Cart
