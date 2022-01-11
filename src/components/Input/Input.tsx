import React, { useState } from "react";
import classes from './Input.module.scss'

interface InputProps {
    id: string;
    label: string;
    type: string;
    value: string;
    onChange: React.ChangeEventHandler;
}

const Input: React.FC<InputProps> = props => {
    const [hideLabel, setHideLabel] = useState(false);

    const hideLabelHandler = () => {
        setHideLabel((prevState: boolean) => !prevState)
    }

    return (
        <div className={classes.field}>
            {!hideLabel && !props.value && <label htmlFor={props.id}>{props.label}</label>}
            <input
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                onFocus={hideLabelHandler}
                onBlur={hideLabelHandler}
            />
        </div>
    )
}

export default Input