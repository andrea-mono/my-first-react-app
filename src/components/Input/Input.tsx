import React, {ChangeEventHandler} from "react";
import classes from './Input.module.scss'

interface InputProps {
    id: string;
    label: string;
    type: string;
    value: string;
    onChange: ChangeEventHandler;
}

const Input: React.FC<InputProps> = props => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type} value={props.value} onChange={props.onChange} />
        </div>
    )
}

export default Input