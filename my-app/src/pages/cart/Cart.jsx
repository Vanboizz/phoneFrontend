import React from 'react'
import "../cart/Cart.css"
import { IoIosArrowBack } from "react-icons/io";
import { GrFormClose } from "react-icons/gr";
import { HiOutlineMinusSm } from "react-icons/hi";
import { BiPlus } from "react-icons/bi";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from 'react';
import Header from '../../components/header/Header'



const Cart = () => {

    const [count, setQuantity] = useState(1)
    return (
        <>
            <Header />
            <div className='cart'>
                <h1 className='cart__title'>
                    My cart
                    <div className='title__back'>
                        <IoIosArrowBack className='title__icon' />
                        <p>Back</p>
                    </div>
                </h1>

                <div className="product">
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
                                    <input type="text" readonly="readonly" value={count} />
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
                                    <input type="text" readonly="readonly" value={count} />
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
                                    <input type="text" readonly="readonly" value={count} />
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
                                    <input type="text" readonly="readonly" value={count} />
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
                                    <input type="text" readonly="readonly" value={count} />
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
                                    <input type="text" readonly="readonly" value={count} />
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
                </div>

                <div className='cart__total'>
                    <div className='total__title'>
                        <p className='title__text'>Total money temporary:</p>
                        <p className='title__price'>10.990.000 ₫</p>
                    </div>

                    <div className='total__btn-submit'>
                        <button className='btn-submit__order'>
                            PROCEED TO ORDER
                        </button>

                        <a className='btn-submit__add-product'>
                            CHOOSE ADD THE OTHER PRODUCT
                        </a>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Cart