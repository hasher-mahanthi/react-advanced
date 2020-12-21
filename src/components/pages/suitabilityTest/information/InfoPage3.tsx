import React,{useState} from 'react';
import './infoPage1.css';
import { useHistory } from "react-router-dom";


function InfoPage3() {
    const history = useHistory();
    const navigateTo = () => history.push('/infopage4');
    const navigateOnBack = () => history.push('/infopage2');
    const [isOptionSelected,setOptionIsSelected]=useState(true);
    const option1Clicked=(e:any)=>{
          setOptionIsSelected(false);
    }
    return (
        <main>
            <div className="q-1">Mostly just to work and back</div>
            <div className="options">
            <button onClick={option1Clicked} className="option1">Round trip to work but mostly with other destinations</button>
            <button  onClick={option1Clicked} className="option2">Mostly just to work and back</button>
            <button onClick={option1Clicked} className="option3">I don’t currently work/ I don’t commute by car/ I do work from home etc.</button>
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

export default InfoPage3
