import React from 'react'
import "../orderdetail/Orderdetail.css"
import { MdRadioButtonChecked } from "react-icons/md";
import { GrBasket } from "react-icons/gr";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineUser} from "react-icons/ai";
import { BsTelephone} from "react-icons/bs";
import { GrLocation} from "react-icons/gr";
import { BsArrowLeftShort} from "react-icons/bs";


const Orderdetail = (props) => {
    return (
        <div className='orderdetail'>
            {console.log(<Orderdetail />)}
            <p className='orderdetail__name'>ORDER DETAIL</p>
            <div className="orderdetail__back" onClick={() => props.parentCallback(1)}>
                <BsArrowLeftShort className='orderdetail__back-icon'/>
                <p className="orderdetail__back-text">Back</p>
            </div>
            <div className="orderdetail__item">
                <div className="orderdetail__item-pro">
                    <img src='./iphone.webp' alt="" className='orderdetail__item-pro-img' />
                    <div className="orderdetail__item-pro-detail">
                        <p className="orderdetail__item-pro-detail-namepro">iPhone 14 Pro Max 128GB | Chính hãng VN/A</p>
                        <p className="orderdetail__item-pro-detail-color">Color: Green</p>
                        <p className="orderdetail__item-pro-detail-quantity">Quantity: 1</p>
                        <p className="orderdetail__item-pro-detail-price">10.990.000 ₫</p>
                    </div>
                </div>
                <div className="orderdetail__status">
                    CANCEL
                </div>
            </div>

            <div className="time-detail">

                <p className='time-detail__title'>Time details:</p>

                <div className="time-detail__point">
                    <div className="time-detail__point-group">
                        <MdRadioButtonChecked className='time-detail__point-group-icon' />
                        <p className='time-detail__point-group-detail-status'>Order confirmed</p>

                    </div>

                    <p className='time-detail__point-time'>
                        21/10/2022
                        <br />
                        15:27
                    </p>
                </div>

                <div className="time-detail__point time-detail__point-under">
                    <div className="time-detail__point-group">
                        <MdRadioButtonChecked className='time-detail__point-group-icon' />
                        <p className='time-detail__point-group-detail-status'>Your order has been delivered to you</p>

                    </div>

                    <p className='time-detail__point-time'>
                        21/10/2022
                        <br />
                        15:27
                    </p>
                </div>

            </div>

            <div className="orderdetail__orderinfo">
                <div className="orderdetail__orderinfo-title">
                    <GrBasket className='orderdetail__orderinfo-title-basket'/>
                    <p className="orderdetail__orderinfo-title-text">Order information</p>
                </div>

                <div className="orderdetail__orderinfo-total">
                    <p className='orderdetail__orderinfo-total-text'>Total product cost:</p>
                    <p className='orderdetail__orderinfo-total-price'>360.000₫</p>
                </div>

                <div className="orderdetail__orderinfo-tran-fee">
                    <p className='orderdetail__orderinfo-tran-fee-text'>Total discount:</p>
                    <p className='orderdetail__orderinfo-tran-fee-price'>-18.000₫</p>
                </div>

                <div className="orderdetail__orderinfo-total">
                    <p className='orderdetail__orderinfo-total-text'>Transport fee:</p>
                    <p className='orderdetail__orderinfo-total-price'>Free of charge</p>
                </div>

                <div className="orderdetail__orderinfo-total">
                    <p className='orderdetail__orderinfo-total-text'>Total order value:</p>
                    <p className='orderdetail__orderinfo-total-price'>342.000₫</p>
                </div>
            </div>

            <div className="orderdetail__cusinfo">
                <div className="orderdetail__cusinfo-title">
                    <BiUserCircle className='orderdetail__cusinfo-title-icon'/>
                    <p className="orderdetail__cusinfo-title-text">Customer information</p>
                </div>

                <div className="orderdetail__cusinfo-row">
                    <AiOutlineUser className='orderdetail__cusinfo-row-icon'/>
                    <p className="orderdetail__cusinfo-row-name">Võ Đình Vân</p>
                </div>

                <div className="orderdetail__cusinfo-row">
                    <BsTelephone className='orderdetail__cusinfo-row-phone'/>
                    <p className="orderdetail__cusinfo-row-name">0123456789</p>
                </div>

                <div className="orderdetail__cusinfo-row">
                    <GrLocation className='orderdetail__cusinfo-row-icon'/>
                    <p className="orderdetail__cusinfo-row-name">HCM</p>
                </div>

            </div>
        </div>
    )
}
export default Orderdetail