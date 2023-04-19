import React, { useEffect } from 'react'
import "../detailbill/Detailbill.css"
import Templatecart from '../../components/templatecart/Templatecart';
import Header from '../../components/header/Header'
import Statusorder from '../../components/statusorder/Statusorder'
import Totalcart from '../../components/totalcart/Totalcart'
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../components/feature/user/userSlice';
const Detailbill = () => {
    const { accessToken } = useSelector(state => state.user)
    const { totalPriceCart } = useSelector(state => state.cart)

    const data = JSON.parse(localStorage.getItem("dataOrder"))
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser({ accessToken }))
    }, [])

    return (
        <>
            <Header></Header>
            <Templatecart text__my='Payment orders' text__btn='CONTINUES' >
                <Statusorder />
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
            </Templatecart>
            <Totalcart text__btn='CONTINUES' />
        </>
    )
}

export default Detailbill
