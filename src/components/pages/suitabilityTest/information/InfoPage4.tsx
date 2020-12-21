import React,{useState} from 'react';
import './infoPage1.css';
import { useHistory } from "react-router-dom";


function InfoPage4() {
    const history = useHistory();
    const navigateTo = () => history.push('/infopage5');
    const navigateOnBack = () => history.push('/infopage3');
    const [isOptionSelected,setOptionIsSelected]=useState(true);
    const option1Clicked=(e:any)=>{
          setOptionIsSelected(false);
    }
    return (
        <main>
            <div className="q-1">How Old you are</div>
            <div className="options">
            <button onClick={option1Clicked} className="option1">{'<'}25</button>
            <button  onClick={option1Clicked} className="option2">25-39</button>
            <button onClick={option1Clicked} className="option3">40-64</button>
            <button onClick={option1Clicked} className="option3">65+</button>
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

export default InfoPage4
