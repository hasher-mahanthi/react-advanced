export const FETCH_CARS='FETCH_CARS';
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
interface fetchCars {
  type: "FETCH_CARS";
  payload: CarState;
}

export type { fetchCars };