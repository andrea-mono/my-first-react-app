import React from 'react';
import classes from './Button.module.scss'
import Spinner from "../Spinner/Spinner";

interface ButtonProps {
    type?: 'submit' | 'button';
    label: string;
    loading?: boolean;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = props => (
    <button
        type={props.type || 'button'}
        className={classes.button}
        disabled={props.disabled}
        onClick={props.onClick}
    >
        {!props.loading && props.label}
        {props.loading && <Spinner />}
    </button>
);

export default Button;