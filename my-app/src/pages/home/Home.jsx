import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../components/feature/products/productsSlice'
import Slider from '../../components/slider/Slider'
import { FaStar, FaPlusCircle } from 'react-icons/fa'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "../home/Home.css"
import "swiper/css/navigation";
import { Grid, Navigation } from "swiper"
import AboutUs from '../../components/aboutus/AboutUs'
import { NavLink } from "react-router-dom"
import { logout } from '../../components/feature/user/userSlice'
const Home = () => {
    const products = useSelector((state) => state.products)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const { user } = useSelector(state => state.user)

    return (
        <>
            {
                user ?
                    (
                        <button onClick={() => {
                            dispatch(logout())
                            window.location.reload()
                        }}>LOGOUT</button>
                    ) :
                    <NavLink className='button' to='/login'>
                        Login
                    </NavLink>
            }
            <Slider />
            <div style={{ padding: "0 100px" }}>
                <h2>THE MOST OUTSTANDING PHONE</h2>
                <div className="product-list">
                    <Swiper
                        slidesPerView={5}
                        navigation={true}
                        grid={{
                            rows: 2,
                        }}
                        spaceBetween={30}
                        modules={[Grid, Navigation]}
                        className="mySwiper"
                    >
                        {
                            products.data ? products.data.map((value, index) => (
                                <SwiperSlide key={index}>
                                    <div className='item' key={index} >
                                        <div className='discount'>
                                            <p >Giảm <span>{value.discount}%</span></p>
                                        </div>
                                        <div className='url'>
                                            <img key={index} src={value.image[0]} alt="" />
                                        </div>
                                        <h3>{value.nameproducts}</h3>
                                        <div className='format'>
                                            <p>{(value.size[0].pricesize * value.discount) / 100}&nbsp;đ</p>
                                            <p>{value.size[0].pricesize}&nbsp;đ</p>
                                        </div>
                                        <div className='promotion'>
                                            {value.promotion}
                                        </div>
                                        <div className='icon'>
                                            <div>
                                                <FaStar className='star' />
                                                <FaStar className='star' />
                                                <FaStar className='star' />
                                                <FaStar className='star' />
                                                <FaStar className='star' />
                                            </div>
                                            <button>
                                                <FaPlusCircle className='circle' />
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )) : null
                        }
                    </Swiper>
                </div>
            </div>
            <AboutUs />

        </>
    )
}

export default Home 