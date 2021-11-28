import React, {useState} from "react";
import './counter.css';
import Table from "../table";
import Button from "../button";

const Counter = ({delCounter, item, onIncrement, onDecrement, onReset}) => {


    return (
        <div className='counter'>
            <Table count={item.value}/>
            <div>
                <Button disabled={item.value === 0} onClick={() => onDecrement(item.id)} label='-'/>
                <Button onClick={() => onReset(item.id)} label='Reset'/>
                <Button onClick={() => onIncrement(item.id)}  label='+'/>
                <Button onClick={() => delCounter(item.id)} label='Del'/>
            </div>
        </div>
    )
}

export default Counter;