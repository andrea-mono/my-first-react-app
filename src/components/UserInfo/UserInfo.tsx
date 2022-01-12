import React from 'react';
import Button from "../Button/Button";
import {useTypedDispatch} from "../../hooks/storeHooks";
import {clearToken} from "../../store/auth";

interface UserInfoProps {
    username: string;
}

const UserInfo: React.FC<UserInfoProps> = props => {
    const dispatch = useTypedDispatch()

    const logoutHandler = () => {
        dispatch(clearToken())
    }

    return (
        <div className="container">
            <div className="headline">
                <h1>Welcome, {props.username}!</h1>
            </div>
            <Button label="Logout" onClick={logoutHandler} />
        </div>
    );
};

export default UserInfo;
