import React from 'react';
import {useTypedDispatch} from "../../hooks/storeHooks";
import {checkExistingUserToken} from "../../store/auth";

interface AuthGuardProps {
    children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({children}) => {
    const dispatch = useTypedDispatch()
    dispatch(checkExistingUserToken())

    return (
        <>
            {children}
        </>
    );
};

export default AuthGuard;
