import React from 'react'
import "../aboutus/AboutUs.css"
const AboutUs = () => {
    return (
        <div className='aboutUs'>
            <h2>About Us</h2>
            <div className='content'>
                <div className='image'>
                    <img src="./tsp.png" alt="" />
                </div>
                <div className='description'>
                    <p>Mỗi con người đều mang trong mình tình yêu quê hương tha thiết.<br /> Trong tình yêu ấy có cả niềm tự hào về những sản vật nổi tiếng gắn<br />  bó lâu đời với truyền thống quê nhà. The Smart Phone rất tự hào khi <br />  đưa đến cho các bạn những chiếc điện thoại thông minh không<br />những mang  trong mình những công nghệ mới nhất mà còn mang <br />  trong mình những thú vui đặc sắc khi mệt mỏi. Chắc chắc khiến bạn<br />  cảm thấy vô cùng thích thú. </p>
                </div>
            </div>
            <div className='border'>
            </div>
            <h2>Our Founders</h2>
            <div className='user'>
                <div className='usercontent'>
                    <div>
                        <div className='format' >
                            <img src="./khang.jpg" alt="" />
                        </div>
                        <h4 >Nguyễn Huỳnh Tuấn Khang Aka Vua Long An</h4>
                        <p>Khang</p>
                    </div>
                    <div>
                        <div className='format'>
                            <img src="van.png" alt="" />
                        </div>
                        <h4>Võ Đình Vân Aka Công Tử Phố Núi</h4>
                        <p>Vân</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs