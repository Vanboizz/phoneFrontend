import React, { useEffect, useState, } from 'react'
import "../productsdetail/ProductsDetail.css"
import { FaStar, FaAngleDown, FaAngleUp, FaCartPlus, FaMobileAlt, FaRegHandPointRight } from 'react-icons/fa'
import { AiOutlineCheck } from "react-icons/ai";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import axios from 'axios'
import Relative from '../../components/relative/Relative';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from "../../components/feature/cart/cartSlice"
import Header from "../../components/header/Header"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const addressData = [
    {
        phone: "0342578371",
        address: "Nguyễn Thái Học, P. Phạm Ngũ Lão, Q.1, TP HCM"
    },
    {
        phone: "0905504715",
        address: "218-220 Trần Quang Khải, Phường Tân Định, Quận 1"
    },
    {
        phone: "0978050292",
        address: "157-159 Nguyễn Thị Minh Khai, P. Phạm Ngũ Lão, Q. 1"
    },
    {
        phone: "0872419419",
        address: "55B Trần Quang Khải, P. Tân Định, Q. 1"
    },
    {
        phone: "0982744714",
        address: "190 Nguyễn Thị Định, khu phố 2, phường An Phú, quận 2"
    },
    {
        phone: "0982744714",
        address: "177 Khánh Hội, P. 3, Q. 4"
    },
    {
        phone: "0982744714",
        address: "458 - 460 Hậu Giang, phường 12, Quận 6"
    },
    {
        phone: "0982744714",
        address: "248 Nguyễn Thị Thập, P. Tân Quy, Q. 7"
    },
]

const promotion = [
    "Up to 1% more discount for Smember members (applicable depending on products)",
    "Comprehensive product protection with extended warranty service",
    "Extra 5% off up to 500,000 VND when paying via Kredivo",
    "Additional discount up to 300,000 VND for orders of 5 million VND or more when paying via VNPAY",
    "Additional discount of VND 600,000 via JCB credit card for orders from VND 10,000,000",
    "Extra 4% off (up to 250,000 VND) via Moca wallet for orders from 500,000 VND",
    "Open UOB card - Get Evoucher up to 3 million purchases at CellphoneS",
    "Open a VIB credit card - Receive a voucher of VND 200,000 for purchases at CellphoneS",
    "New old collection: High price - Quick procedure - Best subsidy"
]

const ProductsDetail = () => {
    const [selectedProvince, setSelectedProvince] = useState()
    const [selectedDistrict, setSelectedDistrict] = useState()
    const [province, setProvince] = useState([])
    const [district, setDistrict] = useState([])
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [isMore, setIsMore] = useState(false)
    const location = useLocation()
    const product = location.state.product
    // console.log(product);
    const [data, setData] = useState(product.size[0].color)
    const [idSize, setIdSize] = useState(product.size[0].idsize);
    const [idColor, setIdColor] = useState(product.size[0].color[0].idcolor);
    const [idImage, setIdImage] = useState(product.image[0].idimage)
    const [priceSize, setPriceSize] = useState(product.size[0].pricesize)
    const [nameSize, setNameSize] = useState(product.size[0].namesize)
    const [idProducts, setIdProducts] = useState(product.idproducts)
    const { accessToken } = useSelector((state) => state.user)
    const { success } = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()

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

    const handleClick = () => {
        dispatch(addCart({ idproducts: idProducts, idsize: idSize, idcolor: idColor, idimage: idImage, accessToken }))
        toast("Add to cart successfully")
    }

    const handleBuyNow = () => {
        dispatch(addCart({ idproducts: idProducts, idsize: idSize, idcolor: idColor, idimage: idImage, accessToken }))
        if (success) {
            navigate("/cart")
            window.location.reload()
        }
    }

    return (
        <>
            <Header />
            <div className='product-detail'>
                <div className='format-child'>
                    <div>
                        <h1>{product.nameproducts} <span>{nameSize}</span> </h1>
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
                                    product ? (product.image.map((value, index) => (
                                        <SwiperSlide key={index}>
                                            <img src={value.avt} />
                                        </SwiperSlide>
                                    ))) : null
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
                                    product ? (product.image.map((value, index) => (
                                        <SwiperSlide key={index}>
                                            <img style={{ width: "100%", height: "100%" }} src={value.avt} />
                                        </SwiperSlide>
                                    ))) : null
                                }
                            </Swiper>
                        </div>
                    </div>
                    <div className='middle-container'>
                        <div className='box-price'>
                            <p className='price-show'>{(priceSize * product.discount) / 100}&nbsp;đ</p>
                            <p className='price-through'>{priceSize}&nbsp;đ</p>
                        </div>
                        <div>
                            <form >
                                {
                                    product ? (product.size.map((value) => (
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
                                                        setPriceSize(value.pricesize)
                                                        setNameSize(value.namesize)
                                                    }
                                                }}

                                            />
                                        </label>
                                    ))) : null
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
                                                {
                                                    product ? product.size.map((value, index) => (
                                                        <p className='price' key={index}>
                                                            {(value.pricesize * product.discount) / 100}&nbsp;đ
                                                        </p>
                                                    )) : null
                                                }
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
                                <button onClick={handleBuyNow}>BUY NOW</button>
                            </div>
                            <button className='cart' onClick={handleClick}>
                                <FaCartPlus style={{ fontSize: "1.2rem" }} />
                                <span className='btnadd'>ADD TO CART</span>
                            </button>


                        </div>
                        <div className='promotion'>
                            <div className='promotion-title'>
                                EXTRA OFFER
                            </div>
                            <div className='render-promotion'>
                                <ul style={{ listStyle: "none" }}>
                                    {
                                        promotion.map((item, index) => (
                                            <li key={index}>
                                                <a href="" >
                                                    {item}
                                                </a>
                                            </li>
                                        ))
                                    }


                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='right-container'>
                        <div className='is-flex'>
                            <select value={selectedProvince} onChange={(e) => setSelectedProvince(e.target.value)} className="box-on-stock-option"
                            >
                                <option value="">Tỉnh/Thành Phố</option>
                                {
                                    province.map((value) => (
                                        <option key={value.code} value={value.code}>{value.name}</option>
                                    ))
                                }
                            </select>
                            <select value={selectedDistrict} style={{ width: "43.7%" }} onChange={(e) => setSelectedDistrict(e.target.value)} className="box-on-stock-option"

                            >
                                <option value="">Quận/Huyện</option>

                                {
                                    district.map((value) => (
                                        <option key={value.code} value={value.code}>{value.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <p className='box-on-stock-count'>There are <strong>4</strong> stores with products</p>
                        <div className='box-on-stock-address'>
                            {
                                addressData.map((item, index) => (
                                    <div key={index} className="box-on-child">
                                        <div className='box-on-stock-item'>
                                            <div className='icon-cps'>
                                                <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"></path></svg>
                                            </div>
                                            <div className='phone'>
                                                <a>{item.phone}</a>
                                            </div>
                                            <div className='address'>
                                                <a href=''>
                                                    &nbsp;-&nbsp;
                                                    <svg style={{ marginRight: "5px" }} data-v-6d14a780="" height="15" fill='#0864c1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path data-v-6d14a780="" d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"></path></svg>
                                                    {item.address}
                                                </a>
                                            </div>
                                        </div></div>
                                ))
                            }

                        </div>
                        <div className='box-warranty-info'>
                            <div className='box-title'>
                                <p>Product information</p>
                            </div>
                            <div className='box-content'>
                                <div className='item-warranty'>
                                    <div>
                                        <FaMobileAlt />
                                    </div>
                                    <div className='item-warranty-description'>
                                        New, full accessories from the manufacturer
                                    </div>
                                </div>
                                <div className='item-warranty'>
                                    <div>
                                        <FaRegHandPointRight />
                                    </div>
                                    <div className='item-warranty-description'>
                                        12 months warranty at Genuine service center. 1 to 1 exchange in 30 days if there is a hardware defect from the manufacturer. <a style={{ color: "red" }} href="">(
                                            See details)</a>
                                    </div>
                                </div>
                            </div>
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
                <Relative />
            </div>
            <ToastContainer />

        </>

    )
}

export default ProductsDetail