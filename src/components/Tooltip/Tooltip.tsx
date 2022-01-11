import React from 'react';
import classes from './Tooltip.module.scss'

interface TooltipProps {
    children: React.ReactNode;
    text: string;
    isVisible?: boolean;
}

const Tooltip: React.FC<TooltipProps> = props => (
    <div className={classes.tooltip}>
        {props.children}
        <span className={`
            ${classes['tooltip__text']} 
            ${props.isVisible ? classes['tooltip__text--visible'] : ''} 
        `}>
            {props.text}
        </span>
    </div>
);

export default Tooltip;