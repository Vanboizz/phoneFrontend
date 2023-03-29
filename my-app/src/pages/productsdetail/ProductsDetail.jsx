import React, { useEffect, useState } from 'react'
import "../productsdetail/ProductsDetail.css"
import { FaStar, FaAngleDown, FaAngleUp, FaCartPlus } from 'react-icons/fa'
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/grid";

// import required modules
import { FreeMode, Navigation, Thumbs, Grid } from "swiper";
import { useLocation } from 'react-router-dom';
import { getProducts } from '../../components/feature/products/productsSlice';
import { useDispatch, useSelector } from 'react-redux';

const ProductsDetail = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [isMore, setIsMore] = useState(false)
    const location = useLocation()
    const product = location.state.product
    const [data, setData] = useState(product.size[0].color)
    const [idSize, setIdSize] = useState(product.size[0].idsize);
    const [idColor, setIdColor] = useState(product.size[0].color[0].idcolor);

    const products = useSelector((state) => state.products)
    console.log(products);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <div className='product-detail'>
            <div className='format'>
                <div>
                    <h1>{product.nameproducts}</h1>
                </div>
                <div className='icon'>
                    <FaStar className='star' />
                    <FaStar className='star' />
                    <FaStar className='star' />
                    <FaStar className='star' />
                    <FaStar className='star' />
                </div>
            </div>
            <hr />
            <div className='flex-container'>
                <div className='left-container'>
                    <div className='gallery'>
                        <Swiper
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                        >
                            {
                                product.image.map((value, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={value} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    <div className='child-gallery'>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={12}
                            slidesPerView={6}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            {
                                product.image.map((value, index) => (
                                    <SwiperSlide key={index}>
                                        <img style={{ width: "100%", height: "100%" }} src={value} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
                <div className='middle-container'>
                    <div className='box-price'>
                        <p className='price-show'>{(product.size[0].pricesize * product.discount) / 100}&nbsp;đ</p>
                        <p className='price-through'>{product.size[0].pricesize}&nbsp;đ</p>
                    </div>
                    <div>
                        <form >
                            {
                                product.size.map((value) => (
                                    <label className='item-linked' key={value.idsize} htmlFor={value.idsize} style={
                                        {
                                            border: value.idsize === idSize ? "1.4px solid #1a94ff" : "",
                                        }
                                    }>
                                        <div className='content'>
                                            <p className='name'>
                                                {
                                                    value.idsize === idSize ? (
                                                        <AiOutlineCheck style={{ color: "#fff", backgroundColor: "#1a94ff", fontWeight: "bold", position: "absolute", left: "0", top: "0" }} />
                                                    ) :
                                                        null
                                                }
                                                {value.namesize}
                                            </p>
                                            <p className="price">
                                                {(value.pricesize * product.discount) / 100}&nbsp;đ
                                            </p>
                                        </div>
                                        <input type="radio" name="size" id={value.idsize} value={value.idsize}
                                            onChange={(e) => {
                                                setIdSize(value.idsize)
                                                if (e.target.checked) {
                                                    setData(value.color)
                                                }
                                            }}

                                        />
                                    </label>
                                ))
                            }
                        </form>
                    </div>
                    <div className='choose-color'>
                        <p>Choose color to see price</p>
                    </div>
                    <div>
                        <form>
                            {
                                data ? data.map((item) => (
                                    <label key={item.idcolor} className='item-linked' style={
                                        {
                                            border: item.idcolor === idColor ? "1.4px solid #1a94ff" : "",
                                        }
                                    }
                                    >
                                        <div className='content'>
                                            <p className='name'>
                                                {
                                                    item.idcolor === idColor ? (
                                                        <AiOutlineCheck style={{ color: "#fff", backgroundColor: "#1a94ff", fontWeight: "bold", position: "absolute", left: "0", top: "0" }} />
                                                    ) :
                                                        null
                                                }
                                                {item.namecolor}
                                            </p>
                                            <p className='price'>
                                                {(7490000 * product.discount) / 100}&nbsp;đ
                                            </p>
                                        </div>
                                        <input
                                            type="radio"
                                            id={item.idcolor}
                                            name="color"
                                            value={item.namecolor}
                                            checked={item.idcolor === idColor}
                                            onChange={(e) => {
                                                setIdColor(item.idcolor)
                                            }}
                                        />
                                    </label>
                                )) : null
                            }
                        </form>
                    </div>
                    <div>
                    </div>
                    <div className='format-button'>
                        <div >
                            <button>BUY NOW</button>
                        </div>
                        <button className='cart'>
                            <FaCartPlus style={{ fontSize: "1.2rem" }} />
                            <span className='btnadd'>ADD TO CART</span>
                        </button>
                    </div>
                </div>
                <div className='left-container'>
                </div>
            </div>
            <div className='description'>
                <h3>Description</h3>
                <hr />
                <div style={{ maxHeight: isMore ? undefined : "200px", overflow: 'hidden' }}>
                    <p>
                        {
                            product.description
                        }
                    </p>
                </div>
                <div className='btn-show'>
                    <button onClick={() => setIsMore(!isMore)}>
                        <span>
                            {
                                isMore ? 'Collagse' : 'See More'
                            }
                        </span>
                        <div>
                            {
                                isMore ? <FaAngleUp /> : <FaAngleDown />
                            }
                        </div>
                    </button>
                </div>
                <hr />
            </div>
            <div className='relative'>
                <h3>Relative</h3>
            </div>
        </div>

    )
}

export default ProductsDetail