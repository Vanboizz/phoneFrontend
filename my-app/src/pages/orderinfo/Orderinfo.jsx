import React from 'react'
import "./Orderinfo.css"
import Templatecart from '../../components/templatecart/Templatecart';
import Header from '../../components/header/Header'
import Totalcart from '../../components/totalcart/Totalcart';
import Statusorder from '../../components/statusorder/Statusorder'
import { RiArrowDownSLine } from "react-icons/ri";


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
                            <input type="text" className='fullname__input' />
                        </div>

                        <div className='customer__personnal'>
                            <input type="text" className='phone__input' />
                        </div>

                        <div className='customer__personnal'>
                            <input type="text" className='email__input' />
                        </div>

                    </div>

                    <div className="order-info__delivery-method">

                        <p className='delivery-method__text'>Choose a delivery method</p>
                        
                        <div className="delivery-method__choose">

                            <div className="choose__pick-up">
                                <input type="radio" value="HTML" />
                                <label for="html">Pick up at the store</label>
                            </div>

                            <div className="choose__delivery">
                                <input type="radio" value="HTML"/>
                                <label for="html">Delivery</label>
                            </div>  
                        </div>

                        <div className="delivery-method__address">
                            <div className="address__province">
                                <input type="text" />
                                <RiArrowDownSLine/>
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
