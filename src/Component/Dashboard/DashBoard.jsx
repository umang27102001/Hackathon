import { useState } from "react";
import BehaviorPredictionScore from "../BehaviorPredictionScore/BehaviorPredictionScore";
import UserProfile from "../UserProfile/UserProfile";
import './DashBoard.css'
import Summary from "../Summary/Summary";
import TalkingPoints from "../TalkingPoints/TalkingPoints";
import FAQ from "../FAQ/FAQ";
import MissingDetails from "../MissingDetails/MissingDetails";
import Strategy from "../Strategy/Strategy";
import FollowUp from "../FollowUp/FollowUp";
function Dashboard() {
    const [card, setCard] = useState(0);
    const Items =[<FAQ/>,<Summary/>,<TalkingPoints/>,<MissingDetails/>,<Strategy/>,<FollowUp/>]
    return (
      <div className="dashboard">
        <div className="CardContainer">
        <UserProfile setCard={setCard}/>
        {Items.filter((e,i)=>i===card)}
        </div>
        <BehaviorPredictionScore setCard={setCard}/>
      </div>
    );
  }
  export default Dashboard;
  