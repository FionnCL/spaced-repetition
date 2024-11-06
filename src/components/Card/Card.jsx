import React from 'react';

import './Card.css'

export default function Card({content}) {
    return(
        <div className='card'>
            <p className='card--text'>
                {content}
            </p>
        </div>
    );
}
