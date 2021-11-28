import React from "react";
import './header-buttons.css';
import Button from "../button";

const HeaderButtons = ({addCounter, resetCounter}) => {
    return (
        <div className='btn-block'>
            <Button onClick={addCounter} label='Add counter'/>
            <Button onClick={resetCounter} label='Reset'/>
        </div>
    )
}

export default HeaderButtons;