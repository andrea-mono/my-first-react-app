import React from "react";
import classes from './Textbox.module.scss'

interface Props {
    label: String;
}

const Textbox: React.FC<Props> = props => {
    return (
            <label className={classes.label}>
                {props.label}
                <input type={"text"} className={classes.textbox} />
            </label>
    )
}

export default Textbox