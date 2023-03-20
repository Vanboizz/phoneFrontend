import React, {  useState } from 'react'
import "../changepassword/ChangePassword.css"
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { changePassword } from '../../components/feature/user/userSlice'
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from 'react-router-dom'

const initial = {
  password: "",
  retypeNewPassword: ""
}

const ChangePassword = () => {
  const [state, setState] = useState(initial)
  const { password, retypeNewPassword } = state

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const navigate = useNavigate()

  const { register, handleSubmit } = useForm()

  const dispatch = useDispatch()

  const submitForm = (data) => {
    if (data.password !== data.retypeNewPassword) {
      toast("Password is not match")
      setState("")
    }
    else {
      navigate("/login")
    }
    dispatch(changePassword(data))
  }
  return (
    <>
      <ToastContainer />
      <div className='gridContainer'>
        <h1>Change Password</h1>
        <div className='gridContent'>
          <form action="" >
            <div style={{ marginBottom: "1rem", width: "350px" }}>
              <input {...register("password")} type="password" placeholder='New Password' name='password' value={password || ""} onChange={handleInputChange} />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <input {...register("retypeNewPassword")} type="password" placeholder='Re-type New Password' name='retypeNewPassword' value={retypeNewPassword || ""} onChange={handleInputChange} />

            </div>
          </form>
        </div>
        <div className='btnChange'>
          <button onClick={handleSubmit(submitForm)}>Login</button>
        </div>
      </div></>
  )
}

export default ChangePassword
