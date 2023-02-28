import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../components/feature/products/productsSlice'
import "../home/Home.css"

const Home = () => {
    const products = useSelector((state) => state.products)
    const dispatch = useDispatch()

    console.log(products)

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <div className='content'>
            {
                products.data ? (products.data.map((value, index) => (
                    <p key={index}>{value.nameproducts}</p>
                ))
                ) : null
            }
        </div>
    )
}

export default Home