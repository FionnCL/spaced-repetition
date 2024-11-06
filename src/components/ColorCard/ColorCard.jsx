import React from 'react';

import './ColorCard.css'

// Here, dangerouslySetInnerHTML allows us to easily make text bold, italic, etc.
export default function ColorCard({content, colorVariable}) {
    return(
        <div className='card' style={{backgroundColor: `var(${colorVariable})`}}>
            <p dangerouslySetInnerHTML={{__html: content}} className='card--text'/>
        </div>
    );
}
