import React from "react";

const Button = (props) => {
    let { btnStyle, children, clickHandler, customClass, href } = props;

    let buttonStyle = {
        "btn-primary": "btn btn-primary",
        "btn-danger": "btn btn-danger",
        "btn-success": "btn btn-success",
        "btn-info": "btn btn-info",
        "btn-warning": "btn btn-warning",
        "btn-dark": "btn btn-dark",
        "btn-secondary": "btn btn-secondary",
        "btn-light": "btn btn-light",
        "btn-primary-rounded": "btn btn-primary btn-lg radius-30",
        "btn-outline-dark-rounded": "btn btn-outline-dark btn-lg ms-3 radius-30",
    };

    return (
        <a
            href={href}
            onClick={() => {
                clickHandler();
            }}
            className={buttonStyle[btnStyle] + " " + customClass}
        >
            {" "}
            {children}{" "}
        </a>
    );
};

export default Button;
