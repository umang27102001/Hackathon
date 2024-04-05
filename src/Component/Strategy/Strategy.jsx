import React from 'react';
import './Strategy.css';
import Images from "../../Images/Images"
function Strategy() {
  return (
    <div className="current-vehicle">
        <div style={{ display: "flex", justifyContent: "space-around", alignItems:"center" }}>
        <h2 id='Head'>Strategies to Improve Probability of Sale</h2><br />
        <br />
        <img src={Images.Strategy} style={{ width: "105px" }} alt="" />
      </div>
<p className="myP">Emphasize the long-term savings and incentives associated with purchasing a hybrid Audi.</p><br />
<p className="myP">Highlight the safety features and lower insurance premiums that come with hybrid vehicles.</p><br />
<p className="myP">Offer a test drive to allow the customer to experience the car on the road.</p><br />
<p className="myP">Clearly explain the financing options and any available promotions.</p><br />
    </div>
  );
}

export default Strategy;