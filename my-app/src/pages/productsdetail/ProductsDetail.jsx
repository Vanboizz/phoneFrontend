import React, { useEffect, useState } from 'react'
import "../productsdetail/ProductsDetail.css"
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



    return (
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
            <div>
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
            </div>
        </div>
    )
}

export default ProductsDetail