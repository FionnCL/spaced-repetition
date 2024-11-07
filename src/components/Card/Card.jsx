import React from 'react';

import './Card.css'

// Here, dangerouslySetInnerHTML allows us to easily make text bold, italic, etc.
export default function Card({content, color, interpolate}) {
    return(
        <div className='card' style={{backgroundColor: `var(${color})`}}>
            {interpolate}
            <p dangerouslySetInnerHTML={{__html: content}} className='card--text'/>
        </div>
    );
}
