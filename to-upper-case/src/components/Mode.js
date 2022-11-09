import React from 'react';

const Mode = (props) => {
    return (
        <div className="container">
        <div className="form-check form-switch">
            <input onClick={props.onClick} value={props.value} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.main}</label>
        </div>
    </div>
    );
};
export default Mode;