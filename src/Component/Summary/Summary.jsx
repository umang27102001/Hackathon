import React from "react";
import "./Summary.css";
import Images from "../../Images/Images";
function Summary() {
  return (
    <div className="summaried">
      <div className="vehicle-info">
        <div style={{ display: "flex", justifyContent: "space-around", alignItems:"center" }}>
          <h2 id="outerp" style={{ color: "Black" }}>
            Interaction Summary
          </h2>
          <img src={Images.Summary} style={{width:"105px"}} alt="" />
        </div>
        <p style={{ lineHeight: "normal" }}>
          The customer is interested in the Audi but has concerns about the
          price, certain features, environmental impact, and long-term costs.
        </p>
      </div>
    </div>
  );
}

export default Summary;
