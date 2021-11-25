import React from 'react';

import './counter.css';

const Counter = ({all,checked}) =>{
    return (
        <div className = 'counter'>
            <p>{all} - {checked} кылынды</p>
        </div>
    )
}

export default Counter