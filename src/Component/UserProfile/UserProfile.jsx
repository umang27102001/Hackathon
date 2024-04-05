import React from 'react'
import './UserProfile.css'
import image from "../../Images/Images"
const UserProfile = ({setCard}) => {
  return (
    <div className="user-profile">
      <div className="buyer-info">
        <div className="avatar"><img src={image.User} style={{width:"100px"}} alt="" /></div>
        <div className="info">
          <p><b>Angela Tauscher</b></p>
          <p><a href="" style={{textDecoration:"None", color:"#0088ff"}}>abcdxyz@hotmail.com</a></p>
          <p> (xxx) xxx-1141</p>
      </div>
      </div>
    </div>
  )
}

export default UserProfile
