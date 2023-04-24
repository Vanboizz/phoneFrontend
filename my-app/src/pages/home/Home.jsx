import React, { useEffect, useState } from 'react'
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
import { Link } from "react-router-dom"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import axios from 'axios'
const Home = () => {
    const products = useSelector((state) => state.products)
    const [arrray, setArrray] = useState([])
    console.log(arrray);
    const { accessToken } = useSelector(state => state.user)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [])


    const getCheckOut = () => {
        axios.get("http://localhost:8000/invoice/getcheckout", {
            headers: {
                Authorization: "Bearer " + accessToken,
            }
        })
            .then(response => setArrray(response.data.result))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getCheckOut()
    }, [])

    return (
        <div style={{ marginTop: "32px" }}>
            <Header />
            <Slider />
            <div style={{ padding: "0 100px" }} className='home'>
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
                            products.data ? products.data.map((value, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <Link to={`/productsdetail/${value.idproducts}`} state={{ product: value }}>
                                            <div className='item' key={index} onClick={() => window.location.replace(`/productsdetail/${value.idproducts}`)}>
                                                <div className='discount'>
                                                    <p >Giảm <span>{value.discount}%</span></p>
                                                </div>
                                                <div className='url'>
                                                    <img key={index} src={value.image[0].avt} alt="" />
                                                </div>
                                                <h3 style={{ color: "#000" }}>{value.nameproducts}</h3>
                                                <div className='format'>
                                                    <p>{(value.size[0].pricesize * value.discount) / 100}&nbsp;đ</p>
                                                    <p>{value.size[0].pricesize}&nbsp;đ</p>
                                                </div>
                                                <div className='promotion' style={{ color: "#000" }}>
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
                                        </Link>

                                    </SwiperSlide>
                                )
                            }) : null
                        }
                    </Swiper>
                </div>
            </div>
            <AboutUs />
            <Footer />

        </div>
    )
}

export default Home 