import React, { useState } from 'react'
import "../changepassword/ChangePassword.css"

const initial = {
  newPassword: "",
  retypeNewPassword: ""
}

const ChangePassword = () => {
  const [state, setState] = useState(initial)
  const { newPassword, retypeNewPassword } = state

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  return (
    <div className='gridContainer'>
      <h1>Change Password</h1>
      <div className='gridContent'>
        <form action="">
          <div style={{ marginBottom: "1rem", width: "350px" }}>
            <input type="password" placeholder='New Password' name='newPassword' value={newPassword || ""} onChange={handleInputChange} />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <input type="password" placeholder='Re-type New Password' name='retypeNewPassword' value={retypeNewPassword || ""} onChange={handleInputChange} />

          </div>
        </form>
      </div>
      <div className='btnChange'>
        <button>Login</button>
      </div>
    </div>
  )
}

export default ChangePassword