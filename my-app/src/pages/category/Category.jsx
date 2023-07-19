import React, { useEffect, useState } from 'react'
import { FaStar, FaPlusCircle } from 'react-icons/fa'
import "swiper/css";
import "swiper/css/grid";
import "../category/Category.css"
import "swiper/css/navigation";
import { Link } from "react-router-dom"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import axios from 'axios'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'


const Category = () => {
    const [category, setCategory] = useState([])
    const [More, setMore] = useState(false)
    const [categorytemp, setCategorytemp] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/product/getcategory/${window.location.href.substring(
            window.location.href.lastIndexOf("/") + 1
        )}`)
            .then(res => {
                setCategory(res.data)
                setCategorytemp(res.data)
            })
            .catch(error => console.log(error))
    }, [])

    const handleLH = () => {

        const sortedData = [...category].sort((a, b) => {
            const priceA = a.size[0].pricesize - (a.size[0].pricesize * (a.discount / 100));
            const priceB = b.size[0].pricesize - (b.size[0].pricesize * (b.discount / 100));
            return priceA - priceB;
        });
        setCategorytemp(sortedData);

    }

    const handleHL = () => {
        const sortedData = [...category].sort((a, b) => {
            const priceA = a.size[0].pricesize - (a.size[0].pricesize * (a.discount / 100));
            const priceB = b.size[0].pricesize - (b.size[0].pricesize * (b.discount / 100));
            return priceB - priceA;
        });
        setCategorytemp(sortedData);
    }
    return (
        <>
            <Header />
            <div className='category'>
                {
                    categorytemp.length !== 0 ?
                        <div className='category__sort'>
                            <h2 className='category__sort-title'>Sorted by</h2>

                            <div className='category__sort-filter'>

                                <button className='category__sort-filter-wrap' onClick={() => handleLH()}>
                                    <div className='category__sort-filter-wrap-icon category__sort-filter-wrap-icon-lh'></div>
                                    <p className='category__sort-filter-hl-title'>Price Low - High</p>
                                </button>

                                <button className='category__sort-filter-wrap' onClick={() => handleHL()}>
                                    <div className='category__sort-filter-wrap-icon category__sort-filter-wrap-icon-hl'></div>
                                    <p className='category__sort-filter-hl-title'>Price High - Low</p>
                                </button>
                            </div>
                        </div>
                        : null
                }

                {
                    categorytemp.length === 0 ?
                        (<div className="category__list-empty">
                            <img src="https://media.itsnicethat.com/original_images/giphy-2021-gifs-and-clips-animation-itsnicethat-02.gif" alt="" className='category__list-empty-image' />
                            <p className='category__list-empty-text'>Empty</p>
                        </div>)
                        : null
                }

                <div className="category__product-list" style={{ maxHeight: More ? undefined : '410px' }}>

                    {
                        categorytemp ? categorytemp.map((value, index) => {
                            return (
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
                                            <p>{value.size[0].pricesize - ((value.size[0].pricesize * value.discount) / 100)}&nbsp;đ</p>
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

                            )
                        }) : null
                    }
                </div>
                {
                    categorytemp.length >= 6
                        ?
                        <div className='category__btn-show'>
                            <button onClick={() => setMore(!More)}>
                                <span>
                                    {
                                        More ? 'Collagse' : 'See More'
                                    }
                                </span>
                                <div>
                                    {
                                        More ? <FaAngleUp /> : <FaAngleDown />
                                    }
                                </div>
                            </button>
                        </div>
                        : null
                }
            </div>

            <Footer />
        </>
    )
}

export default Category

