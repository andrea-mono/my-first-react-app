import React from 'react';
import classes from './App.module.scss'
import Textbox from "./components/Textbox/Textbox";

const App: React.FC = () => {
  return (
    <div className={classes.login}>
      <h1 className={classes.login__headline}>Log in</h1>
      <form className={classes.login__form}>
        <Textbox label={'Login, email or phone number'} />
        <input type="password" />
      </form>
    </div>
  );
}

export default App;
