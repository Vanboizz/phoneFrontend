import React, { useEffect, useState } from 'react'
import "./ProductList.css"
import { BsPencil } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../components/feature/products/productsSlice';
import { getUser } from '../../components/feature/user/userSlice';
import ModalProductList from '../../components/modalproductlist/ModalProductList';
import { Link } from 'react-router-dom';

const datas = [
    {
        idcate: "1",
        namecat: "Samsung",
        nameproducts: "Samsung Galaxy A20",
        promotion: "Tăng thêm dịch vụ bảo hành Vip 12 tháng 1 đổi 1 và 1km khác",
        discount: "30",
        description: "Samsung Galaxy A20 - Mang đến những trải nghiệm ấn tượng.Samsung Galaxy A20 là chiếc điện thoại tiếp nối sự thành công của dòng smartphone Reno. Với những cải tiến mạnh mẽ về cấu hình, hiệu năng lẫn ngoại hình, Oppo Reno7 đã mang đến cho người dùng chiếc điện thoại với những trải nghiệm ấn tượng và tuyệt vời hơn. Cùng khám phá những điều mới mẻ mà Oppo Reno7 mang lại nhé!",
        sizes: [
            {
                colors: [
                    {
                        namecolor: "Orange",
                        quantity: "10"
                    },
                    {
                        namecolor: "Blue",
                        quantity: "5"
                    }
                ],
                namesize: "256GB",
                pricesize: "10500000"
            },

            {
                colors: [
                    {
                        namecolor: "Purple",
                        quantity: "2"
                    },
                    {
                        namecolor: "Red",
                        quantity: "4"
                    }
                ],
                namesize: "126GB",
                pricesize: "9500000"
            },


        ],
        images: []
    },
]

const ProductList = () => {

    const products = useSelector((state) => state.products);
    const [modallist, setModalList] = useState(false)
    const [choose, setChoose] = useState(-1)
    const dispatch = useDispatch();

    const accessToken = localStorage.getItem("accessToken")

    useEffect(() => {
        dispatch(getProducts())
        dispatch(getUser({ accessToken }))
    }, [])

    const toggleModal = () => {
        setModalList(!modallist)
        console.log(choose);
    }
    return (
        <>
            {console.log(products)}
            <div className='productlist'>

                <h1 className='productlist__title'>PRODUCTS</h1>

                <div className='productlist__search'>
                    <input title='search' type="text" className='productlist__search-input' />
                    <button className='productlist__search-btn'>CREATE</button>
                </div>


                <div className='productlist__detail'>
                    <div className='productlist__detail-title'>
                        <p className='productlist__detail-title-com'>Name Product</p>
                        <p className='productlist__detail-title-com'>Discount</p>
                        <p className='productlist__detail-title-com'>Name Size</p>
                        <p className='productlist__detail-title-com'>Price Size</p>
                        <p className='productlist__detail-title-com'>Name Color</p>
                        <p className='productlist__detail-title-com'>Quantity</p>
                        <p className='productlist__detail-title-com'>Action</p>
                    </div>
                    {
                        products.data ? products.data.map((data, index) => (

                            <div key={index} className='productlist__detail-product'>
                                <div className='productlist__detail-product-common'>{data.nameproducts}</div>
                                <div className='productlist__detail-product-common'>{data.discount}</div>
                                <div>
                                    {
                                        data.size ? data.size.map((size, index) => (
                                            <div className='productlist__detail-product-size' key={index}>
                                                <p className='productlist__detail-title-common'>{size.namesize}</p>
                                                <p className='productlist__detail-title-common'>{size.pricesize}</p>

                                                <div className='productlist__detail-title-namecolor'>
                                                    {
                                                        size.color ? size.color.map((color, index) => (
                                                            <p key={index} className='productlist__detail-title-common'>{color.namecolor}</p>
                                                        )) : null
                                                    }
                                                </div>

                                                <div className='productlist__detail-title-quantity'>
                                                    {
                                                        size.color ? size.color.map((color, index) => (
                                                            color.quantity > 0
                                                                ? <p key={index} className='productlist__detail-title-common'>{color.quantity}</p>
                                                                : <p key={index} className='productlist__detail-title-common'>Out off stock</p>
                                                        )) : null
                                                    }
                                                </div>

                                                <div key={index}>
                                                    <Link to="/admin/productsmodifier" state={{ product: data }}>
                                                        <BsPencil className='productlist__detail-product-common-icon productlist__detail-product-common-pen' />

                                                    </Link>
                                                    <ImBin className='productlist__detail-product-common-icon productlist__detail-product-common-bin' />
                                                </div>

                                                <div className='productlist__detail-product-common productlist__detail-product-action'>
                                                </div>
                                            </div>
                                        )) : null
                                    }
                                </div>
                            </div>
                        )) : null
                    }
                </div>
            </div>

            {/* {modallist ? <ModalProductList callbackparent={toggleModal} ></ModalProductList> : null} */}
        </>
    )
}


export default ProductList