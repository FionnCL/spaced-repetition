import React from 'react';

import styles from './Figure.module.css';

export default function Figure({file, width, height, caption}){
    return(
        <div className={styles.figure}>
            <img width={width} height={height} src={file} alt={caption} />
            <p>{caption}</p>
        </div>
    );
}
