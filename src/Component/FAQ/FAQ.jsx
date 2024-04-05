import React from "react";
import "./FAQ.css";
import Images from "../../Images/Images";
function FAQ() {
  return (
    <div className="current-vehicle" id="Faq">
      <div style={{ display: "flex", justifyContent: "space-around" ,alignItems:"center"}}>
        <h2 id="Head">Frequently asked Questions</h2>
        <img src={Images.Faqs} style={{ width: "105px" }} alt="" />
      </div>
      <p className="myP">
        What are the differences between the different Audi models?
      </p>
      <br />
      <p className="myP">What kind of warranty does the Audi come with?</p>
      <br />
      <p className="myP">
        How does the Audi compare to other luxury car brands in terms of price
        and features?
      </p>
      <br />
      <p className="myP">What are the maintenance costs for the Audi?</p>
      <br />
      <p className="myP">Can I get a discount if I purchase the Audi today?</p>
      <br />
    </div>
  );
}

export default FAQ;
