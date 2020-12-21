import React,{useState} from 'react';
import './infoPage1.css';
import { useHistory } from "react-router-dom";


function InfoPage5() {
    const history = useHistory();
    const navigateTo = () => history.push('/infopage6');
    const navigateOnBack = () => history.push('/infopage4');
    const [isOptionSelected,setOptionIsSelected]=useState(true);
    const option1Clicked=(e:any)=>{
          setOptionIsSelected(false);
    }
    return (
        <main>
            <div className="q-1">How many miles a year do you drive?</div>
            <div className="options">
            <button onClick={option1Clicked} className="option1">I know my annual mileage</button>
            <button  onClick={option1Clicked} className="option2">i don’t know</button>
            </div>
            <p className="q-2 p-1">Don’t worry! We can make a pretty good guess from the other questions</p>
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

export default InfoPage5;
