import React, { useEffect, useState } from 'react'
import "../productsmodifier/ProductsModifier.css"
import Modal from '../../components/modal/Modal'
import { FaPenAlt } from "react-icons/fa"
import { IoIosClose } from "react-icons/io"
import { useDispatch } from 'react-redux';
import { addProducts } from '../../components/feature/products/productsSlice';
import { ToastContainer, toast } from "react-toastify"
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const ProductsModifier = () => {
    const [data, setData] = useState({
        name: '',
        discount: '',
        promotion: '',
        description: ''
    });

    var product = {};

    const location = useLocation()

    const [modalOpen, setOpenModal] = useState(-2)

    const [preview, setPreview] = useState([])


    const fileObj = []

    const { name, discount, promotion, description } = data

    const [size, setSize] = useState(location.state == null ? [] : location.state.product.size)

    const [select, setSelect] = useState(2)

    const [category, setCategory] = useState([])

    const dispatch = useDispatch()

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    // console.log(name);
    // console.log(discount);
    // console.log(promotion);
    // console.log(description);
    // console.log(category);
    console.log(size);
    // console.log(preview);

    useEffect(() => {
        if (location.state !== null) {
            product = location.state.product;
            setData({ name: product.nameproducts, discount: product.discount, promotion: product.promotion, description: product.description })
            setSelect(product.idcate)

            product.image.forEach(element => {
                preview.push(element.avt)
                setPreview([... new Set(preview)])
            });
        }
    }, [])

    const handleAddUnit = (e) => {
        e.preventDefault()
        setOpenModal(-1)
    }
    const changeHandler = (e) => {
        let files = e.target.files

        fileObj.push(files)

        let reader;

        for (var i = 0; i < fileObj[0].length; i++) {
            reader = new FileReader()
            reader.readAsDataURL(fileObj[0][i])
            reader.onload = event => {
                preview.push(event.target.result)
                setPreview([... new Set(preview)])
            }
        }
    }

    const HandleRemove = (index) => {
        preview.splice(index, 1)
        setPreview([... new Set(preview)]);
    }

    const handleAddProducts = async (e) => {
        e.preventDefault()

        if (location.state !== null) {
            // toast("????")
        }
        else {
            const product = {
                selectedcategory: category.filter((value) => {
                    return value.idcate == e.target.category.value
                })[0].idcate,
                nameproducts: e.target.name.value,
                promotion: e.target.promotion.value,
                discount: e.target.discount.value,
                description: e.target.description.value,
                sizes: size.map(value => {
                    return value
                }),
                images: preview,
            }
            dispatch(addProducts({ product: product }))
            toast("Add Products Is Succesfull")
        }
    }

    useEffect(() => {
        axios.get("http://localhost:8000/product/getcategory")
            .then(res => {
                setCategory(res.data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            <ToastContainer />
            <h1>Products Modifier</h1>
            <div className='product-modifier'>
                <form className='form' onSubmit={handleAddProducts}>
                    <div>
                        <div className='row-one'>
                            <input className='products-name' type='text' name='name' placeholder='Products Name' value={name} onChange={handleOnChange} required />
                            <input className='discount' name='discount' placeholder='Discount' value={discount} onChange={handleOnChange} required />
                        </div>
                        <div className='row-two'>
                            <input className='promotion' type='text' name='promotion' placeholder='Promotion' value={promotion} onChange={handleOnChange} required />
                        </div>
                        <textarea type='text' name='description' placeholder='Products Description' value={description} onChange={handleOnChange} required />
                        <h2>Category</h2>
                        <select name="category" value={select} onChange={(e) => setSelect(e.target.value)}>
                            {
                                category ? category.map((value) => (
                                    <option key={value.idcate} value={value.idcate} name={value.namecate}>
                                        {
                                            value.namecate
                                        }
                                    </option>
                                )) : null
                            }
                        </select>
                        <h2>Unit</h2>
                        <div>
                            {
                                size ? size.map((value, index) => (

                                    <div key={index} className='sizes'>

                                        <div >
                                            <p>{value.namesize}</p>
                                        </div>
                                        <div >
                                            <p>{value.pricesize}Đ</p>
                                        </div>
                                        <div>
                                            {
                                                value.color.map((color, index) => (
                                                    <div key={index}>
                                                        <div >
                                                            <p >{color.namecolor}</p>
                                                        </div>
                                                        <div>
                                                            <p className='quantity'>{color.quantity}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div>
                                            <button onClick={(e) => {
                                                e.preventDefault()
                                                setOpenModal(index)
                                            }}>
                                                <FaPenAlt />
                                            </button>
                                        </div>
                                    </div>
                                )) : null
                            }
                        </div>
                        <div>
                            <button className='add-size' onClick={handleAddUnit}>Add Unit</button>
                        </div>
                    </div>
                    <div className='rl'>
                        <input type="file" name='file' multiple onChange={changeHandler} required />
                        <div className='rl-container'>
                            {
                                (preview || []).map((url, index) => (
                                    <div className='rl-container-item' key={index}>
                                        <img src={url} key={index} alt="" className='rl-container-img' />
                                        <IoIosClose onClick={() => HandleRemove(index)} key={index + 1} className='rl-container-close' />
                                    </div>
                                ))
                            }
                        </div>
                        <div className='format'>
                            <button className='save'>SAVE</button>
                        </div>
                    </div>
                </form >
            </div >
            {
                modalOpen >= -1 &&
                <Modal size={size[modalOpen]}
                    setOpenModal={() => setOpenModal(-2)}
                    onSubmit={(data) => setSize((prev) => {
                        if (modalOpen === -1) {
                            return [...prev, data]
                        }
                        prev[modalOpen] = data
                        return [...prev]
                    })}
                />
            }
        </>
    )
}

export default ProductsModifier