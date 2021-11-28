import React from "react";
import './button.css';

const Button = ({label, onClick, disabled}) => {
    return (
        <button className='btn' onClick={onClick} disabled={disabled}>{label}</button>
    )
}

export default Button;