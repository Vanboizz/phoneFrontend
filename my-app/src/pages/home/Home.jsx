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
import { Link, useNavigate } from "react-router-dom"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import axios from 'axios'
import { Button } from 'antd'; 

const Home = () => {
    const products = useSelector((state) => state.products)

    const dispatch = useDispatch()
    const [category, setCategory] = useState([])
    const [inputhome, setInputHome] = useState('')
    const navigate = useNavigate()
    var profilter = [];

    useEffect(() => {
        dispatch(getProducts())
        axios.get("http://localhost:8000/product/getcategory")
            .then(res => {
                setCategory(res.data)
            })
            .catch(error => console.log(error))
    }, [])

    const setInput = (childdata) => {
        setInputHome(childdata)
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'VND',
    });

    return (
        <div style={{ marginTop: "32px" }}>

            <Header parentCallback={setInput} />
            <Slider />
            <div className='home'>
                <div className='product-list-title'>
                    <div>
                        <h2>THE MOST OUTSTANDING PHONE</h2>
                    </div>
                    <div>
                        {
                            category.map(value => (
                                <Button onClick={() => {navigate(`/category/${value.idcate}`)}} className='related-tag' key={value.idcate}>
                                    {value.namecate}
                                </Button>
                            ))
                        }
                    </div>
                </div>
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
                            products.data ? profilter = products.data
                                .filter((product) => {
                                    if (inputhome === '')
                                        return product;
                                    else if (product.nameproducts.toLowerCase().includes(inputhome.toLowerCase()))
                                        return product;
                                })
                                .map((value, index) => {
                                    return (
                                        <SwiperSlide key={index} style={{}}>
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

                                                        <p>{(value.size[0].pricesize - ((value.size[0].pricesize * value.discount) / 100)).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}&nbsp;</p>
                                                        <p>{(value.size[0].pricesize).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}&nbsp;</p>
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
                    {
                        profilter.length === 0
                            ?
                            <div className='product-list-container'>

                                <img src="https://media.itsnicethat.com/original_images/giphy-2021-gifs-and-clips-animation-itsnicethat-02.gif" alt="" className='product-list-container__image' />

                                <h1 className='product-list-container__empty'>NO PRODUCT FOUND</h1>
                            </div>
                            : null
                    }
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Home 