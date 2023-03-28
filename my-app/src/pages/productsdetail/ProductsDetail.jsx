import React, { useEffect, useState } from 'react'
import "../productsdetail/ProductsDetail.css"
import { FaStar, FaAngleDown, FaAngleUp, FaCartPlus } from 'react-icons/fa'

import axios from 'axios'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import { useLocation } from 'react-router-dom';

const ProductsDetail = () => {

    const [province, setProvince] = useState([])
    const [district, setDistrict] = useState([])
    const [wards, setWards] = useState([])
    const [selectedProvince, setSelectedProvince] = useState()
    const [selectedDistrict, setSelectedDistrict] = useState()
    const [selectedWard, setSelectedWard] = useState()
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [isMore, setIsMore] = useState(false)

    const location = useLocation()
    const product = location.state.product

    const result = product.size.map((value) => ({
        idsize: value.idsize,
        namesize: value.namesize,
        pricesize: value.pricesize,
        color: value.color
    }))

    console.log(result);

    const colorItem = result.map((value) => value.color.map((item) => ({
        idcolor: item.idcolor,
        namecolor: item.namecolor
    })))

    const colorLength = colorItem.map(value => value.map((item) => {
        return item
    }))

    useEffect(() => {
        axios.get("https://provinces.open-api.vn/api/p/")
            .then((response) => {
                setProvince(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    useEffect(() => {
        if (selectedProvince) {
            axios.get(`https://provinces.open-api.vn/api/p/${selectedProvince}?depth=2`)
                .then((response) => {
                    setDistrict(response.data.districts)
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }, [selectedProvince])

    useEffect(() => {
        if (selectedDistrict) {
            axios.get(`https://provinces.open-api.vn/api/d/${selectedDistrict}?depth=2`)
                .then((response) => {
                    setWards(response.data.wards)
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }, [selectedDistrict])

    const btnSeeMore = () => {
        setIsMore(!isMore)
    }

    // const [color, setColor] = useState([])
    // console.log(color);

    const handleBtn = (e) => {
        const id = e.target.id;
        result[id].color.map((value) => {
            // setColor(value.namecolor)
            // console.log(value.namecolor);
        })
    }

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
                <div>
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
                <div className='right-container'>
                    <form action=''>
                        <select value={selectedProvince} onChange={(e) => setSelectedProvince(e.target.value)}>
                            <option value="" >Chọn Tỉnh-Thành phố</option>
                            {
                                province.map((value) => (
                                    <option key={value.code} value={value.code}>{value.name}</option>
                                ))
                            }
                        </select>
                        <select value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)}>
                            <option value="">Chọn Quận-Huyện</option>
                            {
                                district.map((value) => (
                                    <option key={value.code} value={value.code}>{value.name}</option>
                                ))
                            }
                        </select>
                        <select value={selectedWard} onChange={(e) => setSelectedWard(e.target.value)}>
                            <option value="">Chọn Phường-Xã</option>
                            {
                                wards.map((value) => (
                                    <option key={value.code} value={value.code}>{value.name}</option>
                                ))
                            }
                        </select>
                    </form>
                    <div className='box-price'>
                        <p className='price-show'>{(result[0].pricesize * product.discount) / 100}&nbsp;đ</p>
                        <p className='price-through'>{result[0].pricesize}&nbsp;đ</p>
                    </div>
                    <div className='status'>
                        <p>STATUS <span>IN STOCK</span></p>
                    </div>
                    <div>
                        <form>
                            {
                                result.map((value, i) => (
                                    <label key={i}>
                                        {value.namesize}
                                        <input type="radio" name="size" id={i} value={value.namesize} onClick={(e) => handleBtn(e)} />
                                    </label>
                                ))
                            }

                        </form>
                    </div>
                    <div className='choose-color'>
                        <p>Choose color to see price</p>
                    </div>
                    <div>

                        {
                            colorLength.length ? (
                                <>
                                    {
                                        colorItem.map(value => value.map((item, i) => (
                                            <label key={i}>
                                                {item.namecolor}
                                                <input
                                                    type="radio"
                                                    id={i}
                                                    name="color"
                                                    value={item.namecolor}
                                                />
                                            </label>
                                        )))
                                    }
                                </>
                            ) : (
                                "Click button to see color"
                            )
                        }
                    </div>
                    <div className='formart-button'>
                        <div style={{ marginRight: "1rem" }}>
                            <button>BUY NOW</button>
                        </div>
                        <button style={{ color: "#1A94FF", backgroundColor: "transparent", border: "1px solid #1A94FF", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", cursor: "pointer", borderRadius: "15px", padding: "0 0.8rem" }}>
                            <FaCartPlus style={{ fontSize: "1.8rem" }} />
                            <span style={{ fontWeight: "bold", fontSize: "10px", paddingTop: "10px" }}>ADD TO CART</span>
                        </button>
                    </div>
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
                    <button onClick={btnSeeMore}>
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