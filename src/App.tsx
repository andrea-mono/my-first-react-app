import React from 'react';
import classes from './App.module.scss'
import LoginForm from "./components/LoginForm/LoginForm";

const App: React.FC = () => {
  return (
    <div className={classes.container}>
        <div className={classes.headline}>
          <h1>Sign in</h1>
          <p>Sign in and start managing your candidates!</p>
        </div>
        <LoginForm />
    </div>
  );
}

export default App;
