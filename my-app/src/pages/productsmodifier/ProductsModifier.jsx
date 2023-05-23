import React, { useState } from 'react'
import "../productsmodifier/ProductsModifier.css"
import Modal from '../../components/modal/Modal'
import { FaPenAlt } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../../components/feature/products/productsSlice';


const ProductsModifier = () => {
    const [data, setData] = useState({
        name: '',
        discount: '',
        promotion: '',
        description: ''
    });

    const [modalOpen, setOpenModal] = useState(-2)

    const [preview, setPreview] = useState([])

    const fileObj = []

    const { name, discount, promotion, description } = data

    const [size, setSize] = useState([])

    const [select, setSelect] = useState("Apple")

    const dispatch = useDispatch()

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

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

    const handleAddProducts = async (e) => {
        e.preventDefault()
        const product = {
            namcate: e.target.category.value,
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
    }

    return (
        <div>
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
                        <select name="category" id="" onChange={(e) => setSelect(e.target.value)}>
                            <option value="Apple">Apple</option>
                            <option value="Samsung">SAMSUNG</option>
                            <option value="Xiaomi">XIAOMI</option>
                            <option value="Oppo">OPPO</option>
                            <option value="Realme">realme</option>
                            <option value="Nokia">NOKIA</option>
                            <option value="Vivo">VIVO</option>
                        </select>
                        <h2>Unit</h2>
                        <div >
                            {
                                size.map((value, index) => (
                                    <div key={index} className='sizes'>
                                        <div >
                                            <p>{value.namesize}</p>
                                        </div>
                                        <div >
                                            <p>{value.pricesize}Đ</p>
                                        </div>
                                        <div>
                                            {
                                                value.colors.map((color, index) => (
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
                                ))
                            }
                        </div>
                        <div>
                            <button className='add-size' onClick={handleAddUnit}>Add Unit</button>
                        </div>
                    </div>
                    <div className='rl'>
                        <input type="file" name='file' multiple onChange={changeHandler} required />
                        <div>
                            {
                                (preview || []).map((url, index) => (
                                    <img src={url} key={index} alt="" />
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
        </div>
    )
}

export default ProductsModifier