import React from 'react';
import './App.scss'
import LoginForm from "./components/LoginForm/LoginForm";
import {useTypedSelector} from "./hooks/storeHooks";
import {Navigate} from "react-router-dom";

const App: React.FC = () => {
    const token: string = useTypedSelector(state => state.auth.token)
    return token
            ?  <Navigate to="/dashboard" replace />
            : <div className="container">
                <div className="headline">
                    <h1>Sign in</h1>
                    <p>Sign in and start managing your candidates!</p>
                </div>
                <LoginForm />
              </div>
}

export default App;
