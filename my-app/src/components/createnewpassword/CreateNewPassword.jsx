import React from 'react'
import "../createnewpassword/CreateNewPassword.css"

const CreateNewPassword = () => {
    return (
        <div className='createnewpassword'>
            <p className='createnewpassword__name'>CREATE NEW PASSWORD</p>

            <form action="">
                <div className='userprofile__form'>
                    <label className='userprofile__form-text'>CURRENT PASSWORD</label>
                    <input placeholder='Add current password' className='userprofile__form-input' type="text" name='username' />
                </div>

                <div className='userprofile__form'>
                    <label className='userprofile__form-text'>NEW PASSWORD</label>
                    <input placeholder='Add new password' className='userprofile__form-input' type="text" name='username' />
                </div>

                <div className='userprofile__form'>
                    <label className='userprofile__form-text'>CONFIRM NEW PASSWORD</label>
                    <input placeholder='Confirm new password' className='userprofile__form-input' type="text" name='username' />
                </div>

                <div className='userprofile__form'>
                    <button type="submit" className='userprofile__form-update'>UPDATE INFOMATION</button>
                </div>

            </form>
        </div>
    )
}

export default CreateNewPassword