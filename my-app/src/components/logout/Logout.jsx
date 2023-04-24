import React from 'react'
import "../logout/Logout.css"



const Logout = (props) => {
    return (
        <div className='logout'>
            <div className="logout__overlay">

            </div>

            <div className="logout__content">

                <h1 className='logout__content-title'>Do you want to exit your account?</h1>
                
                <div className='logout__content-body'>

                    <button className="logout__content-body-no" onClick = { () => {props.callbackparent()}}>
                        No
                    </button>
                    <button className="logout__content-body-confirm">
                        Confirm
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Logout
