import React, { useEffect } from 'react'
import "../detailbill/Detailbill.css"
import Templatecart from '../../components/templatecart/Templatecart';
import Header from '../../components/header/Header'
import Statusorder from '../../components/statusorder/Statusorder'
import Totalcart from '../../components/totalcart/Totalcart'
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../components/feature/user/userSlice';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { deleteAllCart } from '../../components/feature/cart/cartSlice';
const Detailbill = () => {

    const accessToken = localStorage.getItem("accessToken")
    const { totalPriceCart } = useSelector(state => state.cart)
    const navigate = useNavigate()
    const data = JSON.parse(localStorage.getItem("dataOrder"))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUser({ accessToken }))
    }, [])

    const handle_checkout = () => {
        axios.post("http://localhost:8000/invoice/checkout", {
            fullname: data.fullname,
            email: data.email,
            address: data.detailaddress + " " + data.wards + " " + data.district + " " + data.province,
            phonenumber: data.phonenumber,
            totalprice: totalPriceCart

        }, {
            headers: {
                Authorization: "Bearer " + accessToken,
            }
        })
            .then(() => {
                dispatch(deleteAllCart({ accessToken }));
                navigate("/cartthanks")
                localStorage.removeItem("dataOrder")
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <Header></Header>
            <Templatecart text__my='Payment orders' text__btn='CONTINUES' text_back='/orderinfo'>
                <Statusorder active_payment='active' />
                <div className='detailbill'>
                    <h3 className='detailbill__order-info'> Order Information</h3>
                    <div >
                        <div className="detailbill__info-common">
                            <p>
                                <span className='info-common-before'>Customer Name:</span>
                                {data.fullname}
                            </p>
                        </div>
                        <div className="detailbill__info-common">
                            <p>
                                <span className='info-common-before'>Phone Number:</span>
                                {data.phonenumber}
                            </p>
                        </div>
                        <div className="detailbill__info-common">
                            <p>
                                <span className='info-common-before'>Email:</span>
                                {data.email}
                            </p>
                        </div>
                        <div className="detailbill__info-common">
                            <p>
                                <span className='info-common-before'>Receive Products At:</span>
                                <span>
                                    {data.detailaddress} {data.wards} {data.district} {data.province}
                                </span>
                            </p>
                        </div>
                        <div className="detailbill__info-common">
                            <p>
                                <span className='info-common-before'>Total Money</span>
                                {totalPriceCart} ₫
                            </p>
                        </div>
                    </div>
                </div>
                <Totalcart text__btn='CONTINUES' handle__checkout={handle_checkout} />
            </Templatecart>
        </>
    )
}

export default Detailbill
