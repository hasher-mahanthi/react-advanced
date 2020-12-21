import React, { FC } from 'react';
import Button from '../UI/Button';
import { useHistory, Link } from 'react-router-dom';
import '../sections/Header.css';

const Homepage: FC = () => {
  const history = useHistory();
  return(
    <section className="section">
      <div className="buttons">
                <Button text="Sign up" onClick={() => history.push('/signup')} className="is-primary" />
                <Button text="Sign in" onClick={() => history.push('/signin')} />
              </div>
      <div className="container">
        <h1 className="title has-text-centered is-size-1 mb-6">Welcome</h1>
        <h2>Wlcome to the app</h2>
      </div>
    </section>
  );
}

export default Homepage;