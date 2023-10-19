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
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'

const Detailbill = () => {
    const accessToken = localStorage.getItem("accessToken")
    const { totalPriceCart } = useSelector(state => state.cart)
    const navigate = useNavigate()
    const dataOrder = JSON.parse(localStorage.getItem("dataOrder"))
    const dispatch = useDispatch()

    const initialOptions = {
        clientId: "AaloxITGVIBmp89-HPQnRbTSCwvM3L-nbiYy9DYSwvC911BO9V3EE2fshj3-NxzhByaKotG72oXGSneb",
        currency: "USD",
        intent: "capture",
    };

    const createOrder = async () => {
        try {
            const response = await axios.post(
                'http://localhost:8000/my-server/create-paypal-order',
                {
                    product: {
                        cost: totalPriceCart,
                    },
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            const order = response.data;
            return order.id;
        } catch (error) {
            console.error('Error creating order:', error);
            throw error;
        }
    };

    const onApprove = (data) => {
        try {
            axios.post(
                'http://localhost:8000/my-server/capture-paypal-order',
                {
                    fullname: dataOrder.fullname,
                    email: dataOrder.email,
                    address: dataOrder.detailaddress + " " + dataOrder.wards + " " + dataOrder.district + " " + dataOrder.province,
                    phonenumber: dataOrder.phonenumber,
                    cost: totalPriceCart,
                    orderID: data.orderID,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: "Bearer " + accessToken,
                    },
                }
            )
                .then(response => response.data)
                .then(() => {
                    dispatch(deleteAllCart({ accessToken }));
                    navigate("/cartthanks")
                    localStorage.removeItem("dataOrder")
                })
                .catch(error => console.log(error))
        } catch (error) {
            console.error('Error capturing order:', error);
            throw error;
        }
    };

    useEffect(() => {
        dispatch(getUser({ accessToken }))
    }, [])

    const handle_checkout = () => {
        axios.post("http://localhost:8000/invoice/checkout", {
            fullname: dataOrder.fullname,
            email: dataOrder.email,
            address: dataOrder.detailaddress + " " + dataOrder.wards + " " + dataOrder.district + " " + dataOrder.province,
            phonenumber: dataOrder.phonenumber,
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
            <PayPalScriptProvider options={initialOptions}>
                <Templatecart text__my='Payment orders' text__btn='CONTINUES' text_back='/orderinfo'>
                    <Statusorder active_payment='active' />
                    <div className='detailbill'>
                        <h3 className='detailbill__order-info'> Order Information</h3>
                        <div >
                            <div className="detailbill__info-common">
                                <p>
                                    <span className='info-common-before'>Customer Name:</span>
                                    {dataOrder.fullname}
                                </p>
                            </div>
                            <div className="detailbill__info-common">
                                <p>
                                    <span className='info-common-before'>Phone Number:</span>
                                    {dataOrder.phonenumber}
                                </p>
                            </div>
                            <div className="detailbill__info-common">
                                <p>
                                    <span className='info-common-before'>Email:</span>
                                    {dataOrder.email}
                                </p>
                            </div>
                            <div className="detailbill__info-common">
                                <p>
                                    <span className='info-common-before'>Receive Products At:</span>
                                    <span>
                                        {dataOrder.detailaddress} {dataOrder.wards} {dataOrder.district} {dataOrder.province}
                                    </span>
                                </p>
                            </div>
                            <div className="detailbill__info-common">
                                <p>
                                    <span className='info-common-before'>Total Money</span>
                                    {totalPriceCart.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                </p>
                            </div>
                        </div>
                    </div>
                    <PayPalButtons
                        createOrder={() => createOrder()}
                        onApprove={(data) => onApprove(data)}
                    />
                </Templatecart>
                <Totalcart text__btn='CONTINUES' handle__checkout={handle_checkout} />
            </PayPalScriptProvider>
        </>
    )
}

export default Detailbill
