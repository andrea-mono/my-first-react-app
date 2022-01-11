import React, {useReducer, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useTypedDispatch} from "../../hooks/storeHooks";
import { setUserToken } from '../../store/auth'
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

    const [email, dispatchEmail] = useReducer(emailReducer, initialFieldState);
    const [password, dispatchPassword] = useReducer(passwordReducer, initialFieldState);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (isSubmitted) setIsSubmitted(false)
        dispatchEmail({ type: 'ON_INPUT', payload: event.target.value })
    }

    const passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (isSubmitted) setIsSubmitted(false)
        dispatchPassword({ type: 'ON_INPUT', payload: event.target.value })
    }

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setIsSubmitted(true)

        if (!email.isValid || !password.isValid) return

        setIsSubmitted(false)
        reset()

        try {
            const user = await login({ email: email.value, password: password.value })
            dispatch(setUserToken(user))
            navigate('/dashboard')
        } catch (e) {
            console.log(e)
        }
    }

    const login = async (data: Object) => {
        const endpoint: string = 'http://localhost:8888/.netlify/functions/authenticate'
        const response = await fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify(data),
        })

        if (!response.ok) throw new Error('ops')

        return await response.json()
    }

    const reset = () => {
        dispatchEmail({ type: 'ON_RESET', payload: '' })
        dispatchPassword({ type: 'ON_RESET', payload: '' })
    }

    return (
        <form className={classes['login-form']} onSubmit={submitHandler}>
            <Tooltip text="Inserisci una email in un formato valido." isVisible={isSubmitted && !email.isValid}>
                <Input
                    id="email"
                    label="Email"
                    type="text"
                    value={email.value}
                    onChange={emailChangeHandler}
                />
            </Tooltip>
            <Tooltip text="La password deve essere maggiore di 5 caratteri." isVisible={isSubmitted && !password.isValid}>
                <Input
                    id="password"
                    label="Password"
                    type="password"
                    value={password.value}
                    onChange={passwordChangeHandler}
                />
            </Tooltip>
            <Button type="submit" label="Login" />
        </form>
    )
}

export default LoginForm;