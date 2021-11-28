import React from "react";
import './counters-number.css';

const CountersNumber = ({number}) => {
    return (
        <div className='table'>
            Количество счетчиков: {number}
        </div>
    )
}

export default CountersNumber;