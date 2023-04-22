import React, { useState, useEffect } from 'react'
import "./Orderinfo.css"
import Templatecart from '../../components/templatecart/Templatecart';
import Header from '../../components/header/Header'
import Statusorder from '../../components/statusorder/Statusorder'
import Totalcart from '../../components/totalcart/Totalcart'
import axios from 'axios'

const Orderinfo = () => {

    const [province, setProvince] = useState([])
    const [district, setDistrict] = useState([])
    const [wards, setWards] = useState([])
    const [selectedProvince, setSelectedProvince] = useState()
    const [selectedDistrict, setSelectedDistrict] = useState()
    const [selectedWard, setSelectedWard] = useState()

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
        <>
            <Header></Header>
            <Templatecart text__my='Order information' text__btn='CONTINUES' >
                <Statusorder />
                <div className='order-info'>

                    <div className="order-info__customer">

                        <p className='customer__text'>Customer Information</p>

                        <div className='customer__personnal'>
                            <input type="text" className='personnal__inp fullname__input' placeholder='Fullname (obligatory)' />
                            <input type="text" className='personnal__inp phone__input' placeholder='Phone Number (obligatory)' />
                            <input type="text" className='personnal__inp email__input' placeholder='Email' name="email" />
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
                                <select name="pets" id="row__province" className=' row__common' 
                                        value={selectedProvince} onChange={(e) => setSelectedProvince(e.target.value)}>
                                    <option value="">--Province--</option>
                                    {
                                        province.map((value) => (
                                            <option key={value.code} value={value.code}>{value.name}</option>
                                        ))
                                    }
                                </select>

                                <select name="pets" id="row__district" className=' row__common' 
                                        value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)}>
                                    <option value="">--District--</option>
                                    {
                                        district.map((value) => (
                                            <option key={value.code} value={value.code}>{value.name}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className='address__row'>
                                <select name="pets" id="row__wards" className=' row__common' 
                                        value={selectedWard} onChange={(e) => setSelectedWard(e.target.value)}>
                                    <option value="">--Wards--</option>
                                    {
                                        wards.map((value) => (
                                            <option key={value.code} value={value.code}>{value.name}</option>
                                        ))
                                    }
                                </select>

                                <input placeholder='Detailed address' type="text" className='detail__input' />
                            </div>
                        </div>
                    </div>
                </div>
            </Templatecart>
            <Totalcart text__btn='CONTINUES' />
        </>
    )
}
export default Orderinfo
