import React, {useReducer, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useTypedSelector, useTypedDispatch} from "../../hooks/storeHooks";
import {login} from '../../store/auth'
import classes from './LoginForm.module.scss'
import Input from "../Input/Input";
import Button from "../Button/Button";
import Tooltip from "../Tooltip/Tooltip";

interface field {
    value: string;
    isValid: boolean;
}

interface actions {
    type: 'ON_INPUT' | 'ON_RESET';
    payload: string;
}

const initialFieldState = {
    value: '',
    isValid: false,
}

const emailReducer = (state: field, action: actions) => {
    switch (action.type) {
        case "ON_INPUT":
            return {
                value: action.payload,
                isValid: action.payload.includes('@')
            }
        case 'ON_RESET':
            return initialFieldState
    }
}

const passwordReducer = (state: field, action: actions) => {
    switch (action.type) {
        case "ON_INPUT":
            return {
                value: action.payload,
                isValid: action.payload.trim().length > 5
            }
        case 'ON_RESET':
            return initialFieldState
    }
}

const LoginForm: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useTypedDispatch()
    const isLoading = useTypedSelector(state => state.auth.isLoading)

    const [email, dispatchEmail] = useReducer(emailReducer, initialFieldState)
    const [password, dispatchPassword] = useReducer(passwordReducer, initialFieldState)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [signInError, setSignInError] = useState(false)

    const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (isSubmitted) setIsSubmitted(false)
        if (signInError) setSignInError(false)
        dispatchEmail({ type: 'ON_INPUT', payload: event.target.value })
    }

    const passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (isSubmitted) setIsSubmitted(false)
        if (signInError) setSignInError(false)
        dispatchPassword({ type: 'ON_INPUT', payload: event.target.value })
    }

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setIsSubmitted(true)

        if (!email.isValid || !password.isValid) return

        setIsSubmitted(false)
        reset()

        try {
            await dispatch(login({email: email.value, password: password.value}))
            navigate('/dashboard')
        } catch (e) {
            setSignInError(true)
        }

    }

    const reset = () => {
        dispatchEmail({ type: 'ON_RESET', payload: '' })
        dispatchPassword({ type: 'ON_RESET', payload: '' })
    }

    return (
        <form className={classes['login-form']} onSubmit={submitHandler}>
            <Tooltip
                text={signInError ? 'These credentials don\'t match our records' : 'Please, enter a valid email.'}
                isVisible={(isSubmitted && !email.isValid) || signInError}
            >
                <Input
                    id="email"
                    label="Email"
                    type="text"
                    value={email.value}
                    onChange={emailChangeHandler}
                />
            </Tooltip>
            <Tooltip
                text="Password must have at least 5 characters."
                isVisible={isSubmitted && !password.isValid}
            >
                <Input
                    id="password"
                    label="Password"
                    type="password"
                    value={password.value}
                    onChange={passwordChangeHandler}
                />
            </Tooltip>
            <Button
                type="submit"
                label="Login"
                loading={isLoading}
                disabled={isLoading}
            />
        </form>
    )
}

export default LoginForm;