import React, { useState, useEffect } from 'react'
import "./Orderinfo.css"
import Templatecart from '../../components/templatecart/Templatecart';
import Header from '../../components/header/Header'
import Statusorder from '../../components/statusorder/Statusorder'
import Totalcart from '../../components/totalcart/Totalcart'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../components/feature/user/userSlice';
import { ToastContainer } from "react-toastify"
import { setDataOrder } from '../../components/feature/cart/cartSlice';
import { useNavigate } from 'react-router-dom'

const Orderinfo = () => {

    const [province, setProvince] = useState([])
    const [district, setDistrict] = useState([])
    const [wards, setWards] = useState([])
    const [selectedProvince, setSelectedProvince] = useState()
    const [selectedDistrict, setSelectedDistrict] = useState()
    const [selectedWard, setSelectedWard] = useState()
    const { user, accessToken } = useSelector((state) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser({ accessToken }))
    }, [])

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

    const handleOrder = (e) => {
        e.preventDefault()
        const data = {
            fullname: e.target.fullname.value,
            phonenumber: e.target.phonenumber.value,
            email: e.target.email.value,
            province: province.filter((value) => {
                return value.code == e.target.province.value
            })[0].name,
            district: district.filter((value) => {
                return value.code == e.target.district.value
            })[0].name,
            wards: wards.filter((value) => {
                return value.code == e.target.wards.value
            })[0].name,
            detailaddress: e.target.detailaddress.value
        }
        JSON.stringify(dispatch(setDataOrder(data)))
        localStorage.setItem("dataOrder", JSON.stringify(data))
        navigate("/detailbill")
    }

    if (user) {
        return (
            <>
                <ToastContainer />
                <Header></Header>
                <Templatecart text__my='Order information' text__btn='CONTINUES' >
                    <Statusorder />
                    <form action="" onSubmit={handleOrder}>
                        <div className='order-info'>
                            <div className="order-info__customer">
                                <p className='customer__text'>Customer Information</p>
                                <div className='customer__personnal'>
                                    <input type="text" className='personnal__inp fullname__input' placeholder='Fullname (obligatory)' name='fullname' id='fullname'
                                        required defaultValue={user[0].fullname} />
                                    <input type="text" className='personnal__inp phone__input' placeholder='Phone Number (obligatory)' id='phonenumber' name='phonenumber' required defaultValue={user[0].phonenumber} />
                                    <input type="text" className='personnal__inp email__input' placeholder='Email' name="email" id='email' defaultValue={user[0].email} required />
                                </div>
                            </div>
                            <div className="order-info__delivery-method">
                                <p className='delivery-method__text'>Choose a delivery method</p>
                                <div className="delivery-method__choose">
                                    <div className="choose__pick-up">
                                        <input name='method' type="radio" value="xxx" className='pick-up__input' checked />
                                        <label for="html" className='pick-up__text'>Pick up at the store</label>
                                    </div>
                                    <div className="choose__delivery">
                                        <input name='method' type="radio" value="yyy" className='delivery__input' />
                                        <label for="html" className='delivery__text'>Delivery</label>
                                    </div>
                                </div>
                                <div className="delivery-method__address">
                                    <div className='address__row mg-bt-5'>
                                        <select name="province" id="province" className='row__province row__common'
                                            required
                                            value={selectedProvince} onChange={(e) => setSelectedProvince(e.target.value)} >
                                            <option value="">--Province--</option>
                                            {
                                                province.map((value) => (
                                                    <option key={value.code} value={value.code} name={value.name}>{value.name}</option>
                                                ))
                                            }
                                        </select>
                                        <select name="district" id="district" className='row__district row__common'
                                            value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} >
                                            <option value="">--District--</option>
                                            {

                                                district.map((value) => (
                                                    <option key={value.code} value={value.code} name={value.name}>{value.name}</option>

                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className='address__row'>
                                        <select name="wards" id="wards" className='row__wards row__common'
                                            value={selectedWard} onChange={(e) => setSelectedWard(e.target.value)} >
                                            <option value="">--Wards--</option>
                                            {
                                                wards.map((value) => (
                                                    <option key={value.code} value={value.code} name={value.name}>{value.name}</option>
                                                ))
                                            }
                                        </select>
                                        <input placeholder='Detailed address' name='detailaddress' id='detailaddress' type="text" className='detail__input' required />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Totalcart text__btn='CONTINUES' />
                    </form>
                </Templatecart>
            </>
        )
    }
}
export default Orderinfo
