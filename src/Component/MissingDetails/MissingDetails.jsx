import React from 'react';
import './MissingDetails.css';
import Images from "../../Images/Images"
function MissingDetails() {
  return (
   <div className="Missing">
    <div style={{ display: "flex", justifyContent: "space-around", alignItems:"center" }}>
        <h2 id='Head'>Things to discuss</h2>
        <br />
        <img src={Images.Discuss} style={{ width: "105px" }} alt="" />
      </div>
        <p className='myPtag'>Explore the customer's budget and financing options in more detail.
</p><br />
<p className='myPtag'>Discuss the specific features of the Audi that align with the customer's needs and preferences.
</p><br />
<p className='myPtag'>Provide information about the Audi's safety features, warranty, and maintenance costs.
</p><br />
   </div>
  );
}

export default MissingDetails;