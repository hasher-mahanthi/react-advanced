import React from 'react';
import './SuitabilityTest.css';
import { useHistory } from "react-router-dom";

function Suitabilty() {
    const history = useHistory();
  const navigateTo = () => history.push('/infopage1');//eg.history.push('/login');
    return (
        <main className="suit">
            <p className="p1">Welcome to the Electric Car Suitability Tool.</p>
            <p className="p2">Flexible electric car subscriptions are one thing...</p>
            <p className="p3">...but first let's check if an electric car would suit your lifestyle!</p>
            <p className="p4">Your results will give you a detailed evaluation of your suitability for driving an electric car. And</p>
            <p className="p5">you'll be able to compare which models fit your range, budget and performance needs.</p>
            <div className='start-test'>
            <button  className='start-test-btn' onClick={navigateTo}>Start Test</button>
            </div>
        </main>
    )
}
export default Suitabilty









