import React, { useEffect } from 'react'
import "../createnewpassword/CreateNewPassword.css"
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createNewPassword, getUser, reset } from '../feature/user/userSlice';
import { ToastContainer, toast } from "react-toastify"




const CreateNewPassword = () => {
    const [newUser, setNewUser] = useState({ curpass: '', newpass: '', confirmpass: '', })
    const { user, success, isError } = useSelector(state => state.user)
    const accessToken = localStorage.getItem('accessToken');
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        dispatch(reset())
    }, [])

    
    
    const handleCreateNewPassWord = (e) => {

        e.preventDefault();
        if (newUser.newpass !== newUser.confirmpass) {
            toast.error("Confirm password must match the new password")
        }
        else {
            dispatch(createNewPassword({ curpass: newUser.curpass, newpass: newUser.newpass, accessToken: accessToken }))
        }
    }

    return (
        <>
            <ToastContainer />
            <div className='createnewpassword'>
                <p className='createnewpassword__name'>CREATE NEW PASSWORD</p>

                <form action="" onSubmit={handleCreateNewPassWord}>
                    <div className='userprofile__form'>
                        <label className='userprofile__form-text'>CURRENT PASSWORD</label>
                        <input  required onChange={e => { setNewUser({ ...newUser, curpass: e.target.value }) }} placeholder='Add current password' className='userprofile__form-input' type="text" name='username' />
                    </div>

                    <div className='userprofile__form'>
                        <label className='userprofile__form-text'>NEW PASSWORD</label>
                        <input required onChange={e => { setNewUser({ ...newUser, newpass: e.target.value }) }} placeholder='Add new password' className='userprofile__form-input' type="text" name='username' />
                    </div>

                    <div className='userprofile__form'>
                        <label className='userprofile__form-text'>CONFIRM NEW PASSWORD</label>
                        <input required onChange={e => { setNewUser({ ...newUser, confirmpass: e.target.value }) }} placeholder='Confirm new password' className='userprofile__form-input' type="text" name='username' />
                    </div>

                    <div className='userprofile__form'>
                        <button type="submit" className='userprofile__form-update'>UPDATE INFOMATION</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default CreateNewPassword