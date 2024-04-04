import React from 'react';
import './FollowUp.css';
import Images from "../../Images/Images"
function FollowUp() {
  return (
   <div className="current-vehicle">
        <h2 id='Head'>Next followup timeline</h2>
        <div className="container">
            <img src={Images.ReplacementVehicle} id='audi' alt="" />
        </div>
        <p >Schedule a test drive for the customer to experience the Audi's features and performance firsthand.
</p>
   </div>
  );
}

export default FollowUp;