import React, { useState } from 'react'
import "../productsmodifier/ProductsModifier.css"
import Modal from '../../components/modal/Modal'
import { FaPenAlt } from "react-icons/fa"

const ProductsModifier = () => {
    const [data, setData] = useState({
        name: '',
        discount: '',
        promotion: '',
        description: ''
    });

    const [modalOpen, setOpenModal] = useState(false)

    const [preview, setPreview] = useState([])

    const fileObj = []

    const { name, discount, promotion, description } = data

    const [size, setSize] = useState([])

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    const handleAddUnit = (e) => {
        e.preventDefault()
        setOpenModal(true)
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

    return (
        <div>
            <h1>Products Modifier</h1>
            <div className='product-modifier'>
                <form className='form'>
                    <div>
                        <div className='row-one'>
                            <input className='products-name' type='text' name='name' placeholder='Products Name' value={name} onChange={handleOnChange} />
                            <input className='discount' name='discount' placeholder='Discount' value={discount} onChange={handleOnChange} />
                        </div>
                        <div className='row-two'>
                            <input className='promotion' type='text' name='promotion' placeholder='Promotion' value={promotion} onChange={handleOnChange} />
                        </div>
                        <textarea type='text' name='description' placeholder='Products Description' value={description} onChange={handleOnChange} />
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
                                                setOpenModal(true)
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
                    <div className='rl' >
                        <input type="file" name='file' multiple onChange={changeHandler} />
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
                modalOpen && <Modal setOpenModal={() => setOpenModal(false)} onSubmit={(data) => setSize((prev) => [...prev, data])} />
            }
        </div>
    )
}

export default ProductsModifier