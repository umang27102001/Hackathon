import React from 'react'
import './UserProfile.css'
import image from "../../Images/Images"
const UserProfile = ({setCard}) => {
  const FollowUpClick = ()=>{
    setCard(5)
  }
  return (
    <div className="user-profile">
      <div className="buyer-info">
        <div className="avatar"><img src={image.UserIcon} alt="" /></div>
        <div className="info">
          <p><b>Angela Tauscher</b></p>
          <p><a href="" style={{textDecoration:"None", color:"#0088ff"}}>basset01@hotmail.com</a></p>
          <p> (507) 990-1141</p>
      </div>
      </div>
    </div>
  )
}

export default UserProfile
