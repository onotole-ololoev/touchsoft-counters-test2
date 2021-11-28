import React from "react";
import './table.css';

const Table = ({count}) => {
    return (
        <div className='table'>
            {count}
        </div>
    )
}

export default Table;