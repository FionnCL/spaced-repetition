import React from 'react';

import './Figure.css';

export default function Figure({file, width, height, caption}){
    return(
        <div className='figure'>
            <img width={width} height={height} src={file} alt={caption} />
            <p>{caption}</p>
        </div>
    );
}
