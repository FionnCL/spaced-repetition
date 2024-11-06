import React, { useEffect, useState } from 'react';

import Card from '../Card/Card';

import './Page0.css'

export default function Page0() {
    const [state, setState] = useState(false);

    useEffect(() => {
        setState(!state);
    },[state]);

    return(
        <div className='page'>
            <div className='grid'>
                <div style={{
                    gridColumnStart: 1, gridColumnEnd: 5,
                    gridRowStart: 3, gridRowEnd: 4
                }}> 
                    <Card/> 
                </div>
        
                <div style={{
                    gridColumnStart: 4,
                    gridRowStart: 2
                }}> 
                    <Card/> 
                </div>
            </div>
        </div>
    );
}
