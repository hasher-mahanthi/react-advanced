import {FETCH_CARS} from '../actions/carActions';
import { CarState } from '../types';
import {fetchCars} from '../actions/carActions';
const initialState:CarState={
    cars:{
      id:0,
    name: '',
    Efficiency: 0,
    Price: 0,
    months: 0,
    img: '',
    Charging: 0,
    Range: 0,
    Features: {
      seats: 0,
      doors: 0,
      front: '',
      speed: '',
      colour: '',
    },
    AvailableDate: '',
    }
}

export const carsReducer = (state = initialState, action:fetchCars) => {
    switch (action?.type) {
      case FETCH_CARS:
        return { cars: action.payload };
      default:
        return state;
    }
  };
  