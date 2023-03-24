import React from 'react'
import "./Orderinfo.css"
import Templatecart from '../../components/templatecart/Templatecart';
import Header from '../../components/header/Header'
import Statusorder from '../../components/statusorder/Statusorder'
import Totalcart from '../../components/totalcart/Totalcart'


const Orderinfo = () => {
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
                                <select name="pets" id="pet-select" className='row__province row__common'>
                                    <option value="">--Province--</option>
                                </select>

                                <select name="pets" id="pet-select" className='row__district row__common'>
                                    <option value="">--District--</option>
                                </select>
                            </div>

                            <div className='address__row'>
                                <select name="pets" id="pet-select" className='row__wards row__common'>
                                    <option value="">--Wards--</option>
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
