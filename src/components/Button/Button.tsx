import React from 'react';
import classes from './Button.module.scss'

interface ButtonProps {
    type?: 'submit' | 'button';
    label: string;
}

const Button: React.FC<ButtonProps> = props => (
    <button type={props.type || 'button'} className={classes.button}>
        {props.label}
    </button>
);

export default Button;