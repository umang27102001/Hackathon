import React from 'react';
import './TalkingPoints.css';
import Images from "../../Images/Images"
function TalkinkPoints() {
  return (
   <div className="current-vehicle">
        <div style={{display:"flex",justifyContent:"space-around", alignItems:'center'}}>
          <h2 id='Head'>Talking Points</h2><br />
          <img src={Images.Talks} style={{width:"72px"}} alt="" />
          </div>
        <p className='myP'>Emphasize the Audi's excellent MPG rating and the availability of hybrid versions to address the customer's concerns about environmental impact and fuel efficiency.</p><br />
<p className='myP'>Highlight the potential long-term savings and tax incentives associated with hybrid vehicles to counter the customer's concerns about the higher initial cost.</p><br />
<p className='myP'>Explain how certain features, such as the advanced navigation system, can enhance the driving experience and provide value beyond their initial cost.</p><br />
   </div>
  );
}

export default TalkinkPoints;