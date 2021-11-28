import React from "react";
import './counters-sum.css';

const CountersSum = ({sum}) => {

    return (
        <div className='table'>
            Сумма значений счетчиков: {sum}
        </div>
    )
}

export default CountersSum;