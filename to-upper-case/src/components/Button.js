import React, { Fragment } from "react";

const Button = (props) => {
    return (
        <Fragment>
            <button 
                onClick={props.onClick} 
                type="button" 
                className={props.className}>
                {props.title}
            </button>
        </Fragment>
    );
};
export default Button;
