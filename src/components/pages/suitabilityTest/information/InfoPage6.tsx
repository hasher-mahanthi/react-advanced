import React from 'react';
import car from '../car.png';
import { useHistory } from "react-router-dom";
import './InfoPage6.css';

function InfoPage6() {
    const history = useHistory();
    const navigateOnBack = () => history.push('/infopage4');
    return (
        <main className='end-page-main'>
             <div className='d-flex end-page'>
            <div className='msgs'>
            <div className='msg'>All done!</div>
            <p className='msg-1'>An email with a link to your results has been sent to email-id</p>
            </div> 
            <img  className='car-img1' src={car} alt='car-image'/>
            </div>
            <div className="back">
            <button className="back-btn" onClick={navigateOnBack}>Back</button>
            </div>
        </main>
    )
}

export default InfoPage6
