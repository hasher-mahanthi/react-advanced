import React,{useState} from 'react';
import image2 from '../carCard/images/image1.png';
import  './CarDetails.css';
import Calendar from 'react-calendar';

function CarDetails(props:any) {
    const [selectedDate,setSelectedDate]=useState('');
    const car1=props.car;
    const car=car1.cars;
        const onDateChange=(e:any)=>{
            console.log(e.target.value,typeof e.target.value);
            setSelectedDate(e.target.value);
        }
    return (
        <section className="row car-details">
            <div className="car-features col-8">
            <div className="car-name-description">BrowseCars {'>'} {car.name}</div>
            <div className='image-date'>
            <img className="car-img" src={image2}/>
            <div className="available-date ">
            <div className="available-date-label">avialble from </div>
            <div className="available-date-value">19.12.2020</div>
            </div>
            </div>
               <div className='range-charging'>
                  <div className='range'>
                     <div className='range-label'>range</div>
                    <div className='range-value'>{car.Range}</div>
                    <div className='realWorld'>Realworld</div>
                    </div>
             <div className='charging'>
             <div className='charging-label'>Charging</div>
             <div className='charging-value'>{car.Charging}kW</div>
             <div className='max-speed'>max. speed</div>
             </div>
             </div>
             <div className='features'>
             <div className='seat'>{car.Features.seats} seats</div>
             <div className='door'>{car.Features.doors} doors</div>
             <div className='front'>{car.Features.front}</div>
             <div className='car-color'>{car.Features.colour}</div>
             <div className='speed'>{car.Features.speed}mph</div>
             </div>
            </div>
           
            <section className="selling-info col-4">
            <div className="car-name-1">{car.name}</div>
            <label className='subscription'>Min. Subsciption Length</label>
            <div>
            <button className='btn btn-1'>1 month</button>
            <button className='btn btn-6'>6 months</button>
            </div>
            <label className='miles-per-month'>Miles per Month</label>
            <div>
            <button className='btn btn-800'>800</button>
            <button className='btn btn-1000'>1000</button>
            <button className='btn btn-1200'>1200</button>
            </div>
            <label className='delivery-date'>delivery-date</label>
            <div className='date'>date:</div>
            <input className='date-picker' onChange={onDateChange} type="date"></input>
            <button className='book-now'>Book Now</button>
            </section>

        </section>
    )
}

export default CarDetails
