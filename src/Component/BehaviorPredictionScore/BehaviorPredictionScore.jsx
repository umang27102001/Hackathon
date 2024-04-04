import React from 'react';
import './BehaviorPredictionScore.css';

function BehaviorPredictionScore({setCard}) {
  const FaqClick = ()=>{
    setCard(0);
  }
  const SummaryClick = ()=>{
    setCard(1);
  }
  const TalkClick = ()=>{
    setCard(2);
  }
  const MissingClick = ()=>{
    setCard(3);
  }
  const StrategyClick = ()=>{
    setCard(4);
  }
  return (
    <div id="bps">
      <div className="behavior-prediction-score">
      <div id="score">
        <p>Behavior Prediction Score</p>
        <p>100</p>
      </div>
      <div id="faq" style={{width:"80px"}} onClick={FaqClick} className='once'>
        <p>FAQs</p>
      </div>
      <div id="summary" style={{width:"80px"}} onClick={SummaryClick} className='once'>
        <p>Summary</p>
      </div>
      <div id="Talk" style={{width:"130px"}} onClick={TalkClick} className='once'>
        <p>Talking Points</p>
      </div>
      <div id="Missing" onClick={MissingClick} className='once'>
        <p>Things to discuss which were missing</p>
      </div>
      <div id="Strategy" onClick={StrategyClick} className='once'>
        <p>Sales Strategy</p>
      </div>
      

   
    </div>
    </div>
  );
}

export default BehaviorPredictionScore;
