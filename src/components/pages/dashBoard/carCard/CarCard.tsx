import React,{useState,useEffect,useCallback} from 'react';
//import Fade from "react-reveal/Fade";
import Modal from "react-modal";
//import Zoom from "react-reveal/Zoom";
import image1 from './images/image1.png';
import image2 from './images/image1.png';
import image3 from './images/image1.png';
import './CarCard.css';
import { connect } from "react-redux";
import {carsReducer} from '../../../../store/reducers/carsReducer';
import CarDetails from '../carDetails/CarDetails';
import SearchBar from '../SearchBar';
import SortCars from '../SortCars';
import {fetchCars} from '../../../../store/actions/carActions';
import {debounce} from  'lodash';

interface CarState
  {
    id:number,
  name: string,
  Efficiency: number,
  Price: number,
  months: number,
  img: string,
  Charging: number,
  Range: number,
  Features: {
    seats: number,
    doors: number,
    front: string,
    speed: string,
    colour: string,
  },
  AvailableDate: '',
  }
  function useDebounce(callback:Function, delay:number) {
    const debouncedFn = useCallback(
      debounce((...args:any) => callback(...args), delay),
      [delay] 
    );
    return debouncedFn;
  }

function CarCard(props:any) {
  const[cars,setCars]=useState([]);
  const [searchText,setSearchText]=useState('');
  const [showCarDetails,setShowCarDetails]=useState(false);
  const [searchResults,setSearchResults]=useState([] as any);
  const [selectedSort,setSelectedSort]=useState('');
  useEffect( () => {
    async function anyNameFunction() {
        const res = await fetch("http://localhost:5000/api/cars");
        const data = await res.json();
        setCars(data);
      }
      anyNameFunction();
  }, [searchText]);
  const getSearchReults=(inputValue:any,cars:any)=>{
    let results=[...cars];
    let filteredResults=  results.filter((result)=>{
       return  result.name.includes(inputValue);
      })
   
     
     setSearchResults(filteredResults);
   }

  const debouncedSave = useDebounce((nextValue:any,cars1:any) => getSearchReults(nextValue,cars1), 200);
      
  const onInputChange=(value:string)=>{
      setSearchText(value);
      debouncedSave(value,cars);
  }
   
          
         
const onExplore=(car:any)=>{
  console.log(car,"acr")
setShowCarDetails(true);
  props.carsReducer(car);
}
let allCars:any;
if(searchText.length===0){
  allCars=[...cars];
}
else{
  allCars=searchResults;
}
const  onSorting=(value:string)=>{
  setSelectedSort(value);
  if(value==='lowest')
  {
    let allCars=[...cars]
    allCars.sort((car1:CarState,car2:CarState)=>{
      return car1.Price-car2.Price
    });
    setCars(allCars);
  }
    else{
      let allCars=[...cars]
    allCars=  allCars.sort((car1:CarState,car2:CarState)=>{
        return car2.Price-car1.Price
      });
      setCars(allCars);
    }
}
    return (
          showCarDetails ?
            <CarDetails  car={props.cars}/> :  
            (
                <div>
                <section className="search-sort-section">
                  < SortCars  selectedSort={selectedSort}  onSorting={onSorting}/>
                   <SearchBar onInputChange={onInputChange}/> 
              </section>
                <ul className="cars">
              {allCars.map((car:any) => (
                <li key={car.id}>
                  <div className="car" >
                      <div className="d-flex">
                      <img src={image1} className="car-image"></img>
                      <div>${car.Price}/month</div>
                      </div>
                      <div className="car-name">{car.name}</div>
                      <div className="effeciency">
                      <div className="effeciency-measure">{car.Efficiency}kWh/miles</div>
                      <div className="effeciency-name">Effeciency</div>
                      </div>
                      <button onClick={()=>{onExplore(car)}} className="explore">Explore</button>
                  </div>
                </li>
              ))}
            </ul>   
            </div> )
    )
}
function mapStateToProps(state:any) {
    
    return state;
  }
  const mapDispatchToProps = (dispatch: React.Dispatch<fetchCars>) => {
    return {
      carsReducer  : (cars:CarState ) =>
        dispatch({
          type: "FETCH_CARS",
          payload: cars,
        }),
    };
  };
  
export default connect(
mapStateToProps,
mapDispatchToProps
  )(CarCard);
