import React from 'react'
import "../register/Register.css"
import { FaFacebook, FaGoogle } from "react-icons/fa"

const Register = () => {
    return (
        <div className='gridContainer'>
            <h1>Register</h1>
            <div className='gridContent'>
                <form action="">
                    <div style={{ marginBottom: "1rem",width:"350px" }}>
                        <input type="text" placeholder='Fullname' />
                    </div>
                    <div style={{ marginBottom: "1rem", position: "relative",width:"350px" }}>
                        <input type="email" placeholder='Email' />
                        <svg stroke="currentColor" fill="currentColor" style={{ position: "absolute", right: "5%", top: "30%" }} strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></svg>
                    </div>
                    <div style={{ marginBottom: "1rem", position: "relative",width:"350px" }}>
                        <input type="password" placeholder='Password' />
                        <button>
                            <svg stroke="currentColor" fill="currentColor" style={{ position: "absolute", right: "5%", top: "25%", fontSize: "1rem" }} strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg>
                        </button>
                    </div>
                    <div style={{ marginBottom: "1rem", position: "relative",width:"350px" }}>
                        <input type="password" placeholder='Retype Password' />
                        <button>
                            <svg stroke="currentColor" fill="currentColor" style={{ position: "absolute", right: "5%", top: "25%", fontSize: "1rem" }} strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg>
                        </button>
                    </div>
                </form>
            </div>
            <p style={{ marginBottom: "1rem" }} className='content'>By Confirming, you agree to the <span>terms of use</span></p>
            <div className='btnConfirm'>
                <button>Confirm</button>
            </div>
            <div className='icon'>
                <div className='format'>
                    <FaFacebook className='iconFace' />
                    <p style={{ marginLeft: "0.4rem" }}>Facebook</p>
                </div>
                <div className='format'>
                    <FaGoogle className='iconGoogle' />
                    <p style={{ marginLeft: "0.4rem" }}>Google</p>
                </div>
            </div>
        </div>
    )
}

export default Register