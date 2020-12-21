import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/sections/Header';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import ForgotPassword from './components/pages/ForgotPassword';
import Homepage from './components/pages/Homepage';
import Dashboard from './components/pages/dashBoard/Dashboard';
import PrivateRoute from './components/auth/PrivateRoute';
import PublicRoute from './components/auth/PublicRoute';
import Loader from './components/UI/Loader';
import firebase from './firebase/config';
import { getUserById, setLoading, setNeedVerification } from './store/actions/authActions';
import { RootState } from './store';
import Suitabilty from './components/pages/suitabilityTest/Suitabilty';
import InfoPage1 from './components/pages/suitabilityTest/information/InfoPage1';
import InfoPage2 from './components/pages/suitabilityTest/information/InfoPage2';
import InfoPage3 from './components/pages/suitabilityTest/information/InfoPage3';
import InfoPage4 from './components/pages/suitabilityTest/information/InfoPage4';
import InfoPage5 from './components/pages/suitabilityTest/information/InfoPage5';
import InfoPage6 from './components/pages/suitabilityTest/information/InfoPage6';

const App: FC = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.auth);
  
  // Check if user exists
  useEffect(() => {
    dispatch(setLoading(true));
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if(user) {
        dispatch(setLoading(true));
        await dispatch(getUserById(user.uid));
        if(!user.emailVerified) {
          dispatch(setNeedVerification());
        }
      }
      dispatch(setLoading(false));
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  if(loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <PublicRoute path="/" component={Homepage} exact />
        <PublicRoute path="/signup" component={SignUp} exact />
        <PublicRoute path="/signin" component={SignIn} exact />
        <PublicRoute path="/forgot-password" component={ForgotPassword} exact />
        <PublicRoute path="/dashboard" component={Dashboard} exact />
        <PublicRoute path="/suitability" component={Suitabilty} exact />
        <PublicRoute path="/infopage1" component={InfoPage1} exact />
        <PublicRoute path="/infopage2" component={InfoPage2} exact />
        <PublicRoute path="/infopage3" component={InfoPage3} exact />
        <PublicRoute path="/infopage4" component={InfoPage4} exact />
        <PublicRoute path="/infopage5" component={InfoPage5} exact />
        <PublicRoute path="/infopage6" component={InfoPage6} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
