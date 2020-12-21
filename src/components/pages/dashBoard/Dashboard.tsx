import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import image1 from './carCard/images/image1.png';
import image2 from './carCard/images/image1.png'
import image3 from './carCard/images/image1.png'

//Components
import SearchBar from './SearchBar';
import SortCars from './SortCars';
import CarCard from './carCard/CarCard';

import Message from '../../UI/Message';
import { setSuccess } from '../../../store/actions/authActions';
import { RootState } from '../../../store';

//Css files
import  './DashBoard.css';


const Dashboard: FC = () => {
  const { user, needVerification, success } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if(success) {
      dispatch(setSuccess(''));
    }
  }, [success, dispatch]);

  return(
    <main>
    {/* <section className="search-sort-section">
     < SortCars />
 <SearchBar/> 
    </section> */}
    <CarCard />
    </main>
  );
}

export default Dashboard;