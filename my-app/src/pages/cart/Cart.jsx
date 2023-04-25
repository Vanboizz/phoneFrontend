import React from 'react'
import '../cart/Cart.css'
import { GrFormClose } from "react-icons/gr";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from 'react';
import Templatecart from '../../components/templatecart/Templatecart';
import Header from '../../../src/components/header/Header'
import Totalcart from '../../components/totalcart/Totalcart';

const Cart = () => {
    const [count, setQuantity] = useState(1)
    return (
        <>
            <Header></Header>
            <Templatecart text__my='My Cart' text__btn='PROCEED TO ORDER' >
                {/* have item */}
                {/* <div className="product">
                    <div className='product__item'>

                        <img src="./iphone.webp" alt="" className='item__img' />

                        <div className='item__info'>
                            <a href="" className='info__name-pro'>IPhone 14 128 GB | Chính hãng VN/A - Red</a>

                            <div className='info__line-2'>
                                <p className='info__sale-price'>10.990.000 ₫</p>

                                <div className='change-quantity'>

                                    <button onClick={() => {
                                        if (count > 1) setQuantity(count - 1)
                                    }} className='contain-minus'>
                                        <AiOutlineMinus className='minus' />
                                    </button>

                                    <input type="text" readOnly="readonly" value={count} />

                                    <button onClick={() => setQuantity(count + 1)} className='contain-plus'>
                                        <AiOutlinePlus className='plus' />
                                    </button>

                                </div>
                            </div>

                            <div className='info__line-3'>
                                <p className='info__sale-regular'>5.690.000 ₫</p>
                                <p className='sales'> Sales 20%</p>
                            </div>

                            <GrFormClose className='info__icon' />
                        </div>
                    </div>

                    <div className='product__item'>

                        <img src="./iphone.webp" alt="" className='item__img' />

                        <div className='item__info'>
                            <a href="" className='info__name-pro'>IPhone 14 128 GB | Chính hãng VN/A - Red</a>

                            <div className='info__line-2'>
                                <p className='info__sale-price'>10.990.000 ₫</p>

                                <div className='change-quantity'>
                                    <button onClick={() => {
                                        if (count > 1) setQuantity(count - 1)
                                    }} className='contain-minus'>
                                        <AiOutlineMinus className='minus' />
                                    </button>
                                    <input type="text" readOnly="readonly" value={count} />
                                    <button onClick={() => setQuantity(count + 1)} className='contain-plus'>
                                        <AiOutlinePlus className='plus' />
                                    </button>
                                </div>
                            </div>

                            <div className='info__line-3'>
                                <p className='info__sale-regular'>5.690.000 ₫</p>
                                <p className='sales'> Sales 20%</p>
                            </div>

                            <GrFormClose className='info__icon' />
                        </div>

                    </div>

                    <div className='product__item'>

                        <img src="./iphone.webp" alt="" className='item__img' />

                        <div className='item__info'>
                            <a href="" className='info__name-pro'>IPhone 14 128 GB | Chính hãng VN/A - Red</a>

                            <div className='info__line-2'>
                                <p className='info__sale-price'>10.990.000 ₫</p>

                                <div className='change-quantity'>
                                    <button onClick={() => {
                                        if (count > 1) setQuantity(count - 1)
                                    }} className='contain-minus'>
                                        <AiOutlineMinus className='minus' />
                                    </button>
                                    <input type="text" readOnly="readonly" value={count} />
                                    <button onClick={() => setQuantity(count + 1)} className='contain-plus'>
                                        <AiOutlinePlus className='plus' />
                                    </button>
                                </div>
                            </div>

                            <div className='info__line-3'>
                                <p className='info__sale-regular'>5.690.000 ₫</p>
                                <p className='sales'> Sales 20%</p>
                            </div>

                            <GrFormClose className='info__icon' />
                        </div>

                    </div>  
                </div> */}

                {/* empty */}
                <div className='product-empty'>
                    <img src="https://media.itsnicethat.com/original_images/giphy-2021-gifs-and-clips-animation-itsnicethat-02.gif" alt="" className='product-empty__gif' />

                    <h2 className='product-empty__title'>There are no products in the cart, please return</h2>
                    <button className='product-empty__btnback' >
                        back the main page
                    </button>
                </div>
            </Templatecart>
            {/* <Totalcart text__btn='PROCEED TO ORDER' /> */}
        </>
    )
}

export default Cart
