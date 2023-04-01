import React from 'react'
import "../detailbill/Detailbill.css"
import Templatecart from '../../components/templatecart/Templatecart';
import Header from '../../components/header/Header'
import Statusorder from '../../components/statusorder/Statusorder'
import Totalcart from '../../components/totalcart/Totalcart'
const Detailbill = () => {
    return (
        <>
            <Header></Header>
            <Templatecart text__my='Payment orders' text__btn='CONTINUES' >
                <Statusorder />
                <div className='detailbill'>
                    <h3 className='detailbill__order-info'> Order Information</h3>

                    <div className="detailbill__info-common">
                        <p>
                            <span className='info-common-before'>Customer Name:</span>
                            Võ Đình Vân
                        </p>
                    </div>

                    <div className="detailbill__info-common">
                        <p>
                            <span className='info-common-before'>Phone Number:</span>
                            0342578371
                        </p>
                    </div>  

                    <div className="detailbill__info-common">
                        <p>
                            <span className='info-common-before'>Email:</span>
                            dinhvan@gmail.com
                        </p>
                    </div>

                    <div className="detailbill__info-common">
                        <p>
                            <span className='info-common-before'>Receive Products At:</span>
                            190 Nguyễn Thị Định, Khu Phố 2,
                            Phường An Phú, Quận 2
                        </p>
                    </div>

                    <div className="detailbill__info-common">
                        <p>
                            <span className='info-common-before'>Total Money</span>
                            10.990.000 ₫
                        </p>
                    </div>

                    
                </div>
            </Templatecart>
            <Totalcart text__btn='CONTINUES' />
        </>
    )
}

export default Detailbill
