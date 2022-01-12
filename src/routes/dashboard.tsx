import React from 'react';
import {Navigate} from "react-router-dom";
import {useTypedSelector} from "../hooks/storeHooks";
import UserInfo from "../components/UserInfo/UserInfo";

const Dashboard = () => {
    const username: string = useTypedSelector(state => state.auth.username)
    const token: string = useTypedSelector(state => state.auth.token)

    return token
            ? <UserInfo username={username} />
            : <Navigate to="/" replace />
};

export default Dashboard;