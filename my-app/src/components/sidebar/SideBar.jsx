import React from 'react'
import "../sidebar/SideBar.css"



const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__info'>
                <p >ChatBox</p>
                <div className="sidebar__info-user">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                    <p>Vẫn Đình Vo</p>
                </div>
            </div>

            <div className='sidebar__search'>
                <input className='search-name' type="text" placeholder='Find a user' />
            </div>

            <div className='list__chat'>

                <div
                    className="item__chat"
                >
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                    <div className="info__friend">
                        <p
                            style={{ fontWeight: 600 }}
                            className='name-friend'>
                            Typer
                        </p>
                        <span
                            style={{ fontSize: 14 }}
                            className='last-message'>
                            Okey thank you
                        </span>
                    </div>
                </div>

                <div className="item__chat">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                    <div className="info__friend">
                        <p
                            style={{ fontWeight: 600 }}
                            className='name-friend'>
                            Typer
                        </p>
                        <span
                            style={{ fontSize: 14 }}
                            className='last-message'>
                            Okey thank you
                        </span>
                    </div>
                </div>

                <div className="item__chat">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                    <div className="info__friend">
                        <p
                            style={{ fontWeight: 600 }}
                            className='name-friend'>
                            Typer
                        </p>
                        <span
                            style={{ fontSize: 14 }}
                            className='last-message'>
                            Okey thank you
                        </span>
                    </div>
                </div>

                <div className="item__chat">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                    <div className="info__friend">
                        <p
                            style={{ fontWeight: 600 }}
                            className='name-friend'>
                            Typer
                        </p>
                        <span
                            style={{ fontSize: 14 }}
                            className='last-message'>
                            Okey thank you
                        </span>
                    </div>
                </div>

                <div className="item__chat">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                    <div className="info__friend">
                        <p
                            style={{ fontWeight: 600 }}
                            className='name-friend'>
                            Typer
                        </p>
                        <span
                            style={{ fontSize: 14 }}
                            className='last-message'>
                            Okey thank you
                        </span>
                    </div>
                </div>

                <div className="item__chat">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                    <div className="info__friend">
                        <p
                            style={{ fontWeight: 600 }}
                            className='name-friend'>
                            Typer
                        </p>
                        <span
                            style={{ fontSize: 14 }}
                            className='last-message'>
                            Okey thank you
                        </span>
                    </div>
                </div>

                <div className="item__chat">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                    <div className="info__friend">
                        <p
                            style={{ fontWeight: 600 }}
                            className='name-friend'>
                            Typer
                        </p>
                        <span
                            style={{ fontSize: 14 }}
                            className='last-message'>
                            Okey thank you
                        </span>
                    </div>
                </div>

                <div className="item__chat">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                    <div className="info__friend">
                        <p
                            style={{ fontWeight: 600 }}
                            className='name-friend'>
                            Typer
                        </p>
                        <span
                            style={{ fontSize: 14 }}
                            className='last-message'>
                            Okey thank you
                        </span>
                    </div>
                </div>

                <div className="item__chat">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                    <div className="info__friend">
                        <p
                            style={{ fontWeight: 600 }}
                            className='name-friend'>
                            Typer
                        </p>
                        <span
                            style={{ fontSize: 14 }}
                            className='last-message'>
                            Okey thank you
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar