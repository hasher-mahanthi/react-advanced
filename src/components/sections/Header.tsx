import React, { FC } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';



import Button from '../UI/Button';
import { RootState } from '../../store';
import { signout } from '../../store/actions/authActions';
import logo from './Vector.png';
import {APP_NAME,ELECTRIC_CARS,SUITABILITY_TOOL,MY_BOOKING} from './constants/Constants';
import './Header.css';


const Header: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: RootState) => state.auth);

  const logoutClickHandler = () => {
    dispatch(signout());
  }

  return(
    <header className="app-header">
        <div className="app-info">
        <img src={logo} className="app-logo" />
          {/* <Link className="navbar-item app-name" to={!authenticated ? "/" : "/dashboard"}>{APP_NAME}</Link> */}
          <div className=" app-name" >{APP_NAME}</div>
        </div>

        {/* <div className=""> */}
          <nav className="nav-items">
            {/* {!authenticated ? <div className="buttons">
                <Button text="Sign up" onClick={() => history.push('/signup')} className="is-primary" />
                <Button text="Sign in" onClick={() => history.push('/signin')} />
              </div>
              : */}
              <>
              <Link className="nav-item" to="/dashboard">{ELECTRIC_CARS}</Link> 
                <Link className="nav-item" to="/suitability">{SUITABILITY_TOOL}</Link> 
                <Link className="nav-item" to="/dashboard">{MY_BOOKING}</Link> 
               <div className="nav-item nav-btn" onClick={logoutClickHandler} >Sign Out</div>
              </>
               {/* } */}
               
          </nav>
        {/* </div> */}
    </header>
  );
}

export default Header;