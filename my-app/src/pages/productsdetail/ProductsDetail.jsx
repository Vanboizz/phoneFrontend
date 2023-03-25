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

const ProductsDetail = () => {

    const [province, setProvince] = useState([])
    const [district, setDistrict] = useState([])
    const [wards, setWards] = useState([])

    const [selectedProvince, setSelectedProvince] = useState()
    const [selectedDistrict, setSelectedDistrict] = useState()
    const [selectedWard, setSelectedWard] = useState()

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [isMore, setIsMore] = useState(false)


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


    return (
        <div className='product-detail'>
            <div className='format'>
                <div>
                    <h1>Samsung Galaxy S23 8GB 256GB</h1>
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
                            <SwiperSlide>
                                <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_burgundy_211119.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_phantomwhite_211119.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_green_211119.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_devicepenbackr30_burgundy_211119.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_green_211119.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_devicepenbackr30_burgundy_211119.jpg" alt="" />
                            </SwiperSlide>
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
                            <SwiperSlide>
                                <img src="https://cdn2.cellphones.com.vn/58x58,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_burgundy_211119.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://cdn2.cellphones.com.vn/58x58,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_phantomwhite_211119.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://cdn2.cellphones.com.vn/58x58,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_green_211119.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://cdn2.cellphones.com.vn/58x58,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_devicepenbackr30_burgundy_211119.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://cdn2.cellphones.com.vn/58x58,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_green_211119.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://cdn2.cellphones.com.vn/58x58,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_devicepenbackr30_burgundy_211119.jpg" alt="" />
                            </SwiperSlide>
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
                        <p className='price-show'>3.900.000&nbsp;đ</p>
                        <p className='price-through'>4.900.000&nbsp;đ</p>
                    </div>
                    <div className='status'>
                        <p>STATUS <span>IN STOCK</span></p>
                    </div>
                    <div></div>
                    <div className='choose-color'>
                        <p>Choose color to see price</p>
                    </div>
                    <div></div>
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptas iste tenetur vero nihil corporis vel quae ipsam sunt repellat quod deserunt fuga saepe magni, hic consectetur iusto cupiditate ex officiis. Voluptas corporis quae sed nihil voluptatibus possimus? Vel odio eos fugit, provident, at atque eaque ullam facilis odit eum, ratione nesciunt dignissimos illo fugiat. Aspernatur reiciendis molestias nisi optio, accusantium corporis quo quae hic a earum. Pariatur, dolores expedita. Delectus ad doloribus magni explicabo recusandae, omnis ea enim dolorum deleniti corrupti? Nam ab eius id quidem excepturi quam cum, voluptatem itaque necessitatibus aspernatur earum reprehenderit, dolorem at! Impedit quam, molestias, odit doloremque facere non in nam veritatis alias rerum reiciendis dolorem qui inventore nihil, maiores ex ipsa repellendus sequi quo numquam voluptas? Magni quidem corporis dolor, perferendis voluptas voluptate eligendi illo. Suscipit eos alias explicabo fugiat nobis aut illum, natus optio quasi omnis voluptatem! Nisi nihil, deleniti quisquam temporibus, tenetur et vero eligendi molestiae suscipit reprehenderit dicta, in illum officiis consectetur aspernatur unde nemo ratione fugiat illo vitae nulla doloremque laboriosam quia asperiores. Recusandae explicabo rem neque rerum. Repellat nihil illum sequi eligendi libero minus molestiae assumenda similique, ea earum corporis nisi laudantium. Assumenda quisquam voluptatum nesciunt ipsam adipisci consectetur deleniti debitis, sint, quibusdam nemo impedit incidunt aperiam amet sit magni aliquam voluptas modi nostrum ducimus. Laudantium nam accusantium voluptate nobis eaque, maxime ipsam dolorum nemo asperiores. Facere, possimus culpa sit ipsum assumenda id rerum expedita itaque cupiditate sequi numquam ut, recusandae illum, corrupti ducimus quasi laboriosam aliquid? Possimus numquam dolorem rem aperiam deserunt est ipsa eligendi excepturi. Rerum molestias deserunt id soluta aliquam? Delectus molestias eligendi odit soluta natus facilis magnam temporibus modi tempora aliquam assumenda tempore quia quidem exercitationem eveniet sequi nulla voluptate illo praesentium provident, minus doloribus aliquid. Illum sunt, praesentium quod voluptate delectus et labore!
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