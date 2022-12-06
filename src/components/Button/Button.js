import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
    return <button 
            type={props.type || 'button'}
            onClick={props.onClick} 
            className={classes.button}>
             {props.value || 'Button'}
            </button>
};

export default Button;