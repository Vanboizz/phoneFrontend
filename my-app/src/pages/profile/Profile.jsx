import React from 'react'
import "../profile/Profile.css"
import BlockMenu from "../../components/blockmenu/BlockMenu"
import Header from "../../components/header/Header"
import UserProfile from '../../components/userprofile/UserProfile'
import Fotter from "../../components/footer/Footer"
import CreateNewPassword from '../../components/createnewpassword/CreateNewPassword'
import CreateDelivery from '../../components/createdelivery/CreateDelivery'
import Purchase from '../../components/purchase/Purchase'

const Profile = () => {
    return (
        <div>
           <Header/>
           <div className='profile'>
                
                <BlockMenu/>

           </div>
           <Fotter/> 
        </div>
    )
}

export default Profile

