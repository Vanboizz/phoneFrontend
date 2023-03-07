import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../components/feature/products/productsSlice'
import Slider from '../../components/slider/Slider'
import "../home/Home.css"
import { FaStar, FaPlusCircle } from 'react-icons/fa'

const Home = () => {
    const products = useSelector((state) => state.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <div>
            <Slider />
            <h2>THE MOST OUTSTANDING PHONE</h2>
            <div className='gridContent'>
                {
                    products.data ? (
                        products.data.map((value, index) => (
                            <div className='item' key={index} style={{ position: "relative" }}>
                                <div style={{ position: "absolute", top: "0", backgroundColor: "red", borderRadius: "0.4rem", padding: "0.2rem" }}>
                                    <p style={{ color: "white", fontWeight: "600", fontSize: "0.8rem" }}>Giảm <span>{value.discount}%</span></p>
                                </div>
                                <div>
                                    <img style={{ width: "14rem", height: "13rem", marginTop: "1rem" }} key={index} src={value.image[0]} alt="" />
                                </div>
                                <h3>{value.nameproducts}</h3>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <p style={{ color: "red", fontWeight: "bold", fontSize: "1.1rem" }}>{(value.size[0].pricesize * value.discount) / 100}<span>đ</span></p>
                                    <p style={{ color: "#999", fontWeight: "bold", textDecoration: "line-through" }}>{value.size[0].pricesize}<span>đ</span></p>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div>
                                        <FaStar style={{ color: "#FFD700", fontSize: "1.4rem" }} />
                                        <FaStar style={{ color: "#FFD700", fontSize: "1.4rem" }} />
                                        <FaStar style={{ color: "#FFD700", fontSize: "1.4rem" }} />
                                        <FaStar style={{ color: "#FFD700", fontSize: "1.4rem" }} />
                                        <FaStar style={{ color: "#FFD700", fontSize: "1.4rem" }} />
                                    </div>
                                    <button style={{ border: "none", backgroundColor: "transparent", cursor: "pointer" }}>
                                        <FaPlusCircle style={{ color: "red", fontSize: "1.4rem" }} />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) :
                        null
                }
            </div>

        </div>
    )
}

export default Home 