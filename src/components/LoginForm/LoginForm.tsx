import React, { useState } from 'react';
import classes from './LoginForm.module.scss'
import Input from "../Input/Input";

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
    }

    return (
        <form className={classes['login-form']} onSubmit={submitHandler}>
            <Input id="email" label="Email" type="text" value={email} onChange={emailChangeHandler} />
            <Input id="password" label="Password" type="password" value={password} onChange={passwordChangeHandler} />
            {email} {password}
        </form>
    )
}

export default LoginForm;