import React, { useState } from 'react';
import './infoPage1.css';
import { useHistory } from "react-router-dom";

function InfoPage1() {
    const history = useHistory();
    const navigateTo = () => history.push('/infopage2');
    const navigateOnBack = () => history.push('/suitability');
    const [isOptionSelected,setOptionIsSelected]=useState(true);
    const option1Clicked=(e:any)=>{
          setOptionIsSelected(false);
    }
    return (
        <main>
            <div className="q-1">How do you park at home?</div>
            <div className="q-2">Select the option that best describes how you park at home:</div>
            <div className="options">
            <button onClick={option1Clicked} className="option1">Private OffSEt Parking</button>
            <button  onClick={option1Clicked} className="option2">Shared Parking</button>
            <button onClick={option1Clicked} className="option3">On Street Parking</button>
            </div>
            <div className="back-next">
            <div className="back">
            <button className="back-btn" onClick={navigateOnBack}>Back</button>
            </div>
            <div className="next">
            <button className="next-btn" disabled={isOptionSelected} onClick={navigateTo}>Next</button>
            </div>
            </div>
        </main>
    )
}

export default InfoPage1
