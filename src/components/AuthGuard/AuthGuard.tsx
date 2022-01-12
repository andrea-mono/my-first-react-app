import React from 'react';
import {useTypedDispatch} from "../../hooks/storeHooks";
import {checkExistingUserToken} from "../../store/auth";

const AuthGuard: React.FC = ({children}) => {
    const dispatch = useTypedDispatch()
    dispatch(checkExistingUserToken())

    return (
        <>
            {children}
        </>
    );
};

export default AuthGuard;
