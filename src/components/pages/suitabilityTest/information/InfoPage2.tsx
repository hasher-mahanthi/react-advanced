import React, { useState } from 'react'
import './InfoPage2.css';
import { useHistory } from "react-router-dom";

function InfoPage2() {
    const [pincode,setPincode]=useState();
    const history = useHistory();
    const navigateTo = () => history.push('/infoPage3');
    const navigateOnBack = () => history.push('/infopage1');
    const [isOptionSelected,setOptionIsSelected]=useState(true);
    const onEnterPincode=(e:any)=>{
        if(e.target.value.length===6)
       setOptionIsSelected(false);
    }

    return (
<main>
            <div className="q-1">Where do you live?</div>
            <div className="q-2">Enter your pincode</div>
            <div className="options">
            <input placeholder="enter a valid pincode of 6 digits" value={pincode} onChange={onEnterPincode} className="pincode" />
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

export default InfoPage2
