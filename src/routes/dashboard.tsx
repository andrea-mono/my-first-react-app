import React from 'react';
import {Navigate} from "react-router-dom";
import {useTypedSelector} from "../hooks/storeHooks";

const Dashboard = () => {
    const token: string = useTypedSelector(state => state.auth.token)
    return token
            ? <div> logged in </div>
            : <Navigate to="/" replace />
};

export default Dashboard;