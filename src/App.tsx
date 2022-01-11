import React from 'react';
import classes from './App.module.scss'

const App: React.FC = () => {
  return (
    <div className={classes.login}>
      <h1 className={classes.login__headline}>Log in</h1>
      <form className={classes.login__form}>
      </form>
    </div>
  );
}

export default App;
