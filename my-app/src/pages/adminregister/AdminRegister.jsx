import React, { useState } from 'react'
import "../adminregister/AdminRegister.css"
import { FaFacebook, FaGoogle } from "react-icons/fa"
import axios from 'axios'
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'

const initial = {
    fullname: "",
    phonenumber: "",
    password: "",
    retypepassword: ""
}

const AdminRegister = () => {

    const [state, setState] = useState(initial)

    const { fullname, email, password, retypepassword } = state
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (e.target.password.value !== e.target.retypepassword.value) {
            toast("Password is not match")
        } else {
            await axios.post(
                "http://localhost:8000/auth/admin/register",
                {
                    fullname: e.target.fullname.value,
                    email: e.target.email.value,
                    password: e.target.password.value
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            ).then(() => navigate("/login"))
        }
    }

    return (
        <>
            <Header />
            <div className='admin-register' >
                <h1>Amin Register</h1>
                <div className='grid-content'>
                    <form onSubmit={handleSubmit}>
                        <div className='row-one'>
                            <input type="text" placeholder='Full Name' name='fullname' value={fullname} onChange={handleInputChange} required />
                        </div>

                        <div className='row-two'>
                            <input type="email" placeholder='Email' name='email' value={email} onChange={handleInputChange} required />
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></svg>
                        </div>
                        <div className='row-three'>
                            <input type="password" placeholder='Password' name='password' value={password} onChange={handleInputChange} required />
                        </div>
                        <div className='row-four'>
                            <input type="password" placeholder='Retype Password' name='retypepassword' value={retypepassword} onChange={handleInputChange} required />
                        </div>
                        <p className='row-five'>By Confirming, you agree to the <span>terms of use</span></p>
                        <div className='btn-confirm'>
                            <button type='submit'>Confirm</button>
                        </div>
                    </form>
                </div>
                <div className='icon'>
                    <div className='format'>
                        <FaFacebook className='iconFace' />
                        <p >Facebook</p>
                    </div>
                    <div className='format'>
                        <FaGoogle className='iconGoogle' />
                        <p >Google</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminRegister;