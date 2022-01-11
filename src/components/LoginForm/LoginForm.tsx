import React, { useState } from 'react';
import classes from './LoginForm.module.scss'
import Input from "../Input/Input";
import Button from "../Button/Button";

const LoginForm: React.FC = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value)
    }

    const passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value)
    }

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        reset()
    }

    const reset = () => {
        setEmail('')
        setPassword('')
    }

    return (
        <form className={classes['login-form']} onSubmit={submitHandler}>
            <Input id="email" label="Email" type="text" value={email} onChange={emailChangeHandler} />
            <Input id="password" label="Password" type="password" value={password} onChange={passwordChangeHandler} />
            <Button type="submit" label="Login" />
            {email} {password}
        </form>
    )
}

export default LoginForm;