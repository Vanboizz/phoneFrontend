import React, { useState } from 'react'
import "../register/Register.css"
import { FaFacebook, FaGoogle } from "react-icons/fa"

const initial = {
    fullname: "",
    email: "",
    password: "",
    retypepassword: ""
}

const Register = () => {

    const [state, setState] = useState(initial)
    const { fullname, email, password, retypepassword } = state
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    return (
        <div className='gridContainer'>
            <h1>Register</h1>
            <div className='gridContent'>
                <form action="">
                    <div style={{ marginBottom: "1rem", width: "350px" }}>
                        <input type="text" placeholder='Fullname' name='fullname' value={fullname || ""} onChange={handleInputChange} />
                    </div>
                    <div style={{ marginBottom: "1rem", position: "relative" }}>
                        <input type="email" placeholder='Email' name='email' value={email || ""} onChange={handleInputChange} />
                        <svg stroke="currentColor" fill="currentColor" style={{ position: "absolute", right: "5%", top: "30%" }} strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></svg>
                    </div>
                    <div style={{ marginBottom: "1rem" }}>
                        <input type="password" placeholder='Password' name='password' value={password || ""} onChange={handleInputChange} />
                    </div>
                    <div style={{ marginBottom: "1rem" }}>
                        <input type="password" placeholder='Retype Password' name='retypepassword' value={retypepassword || ""} onChange={handleInputChange} />
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