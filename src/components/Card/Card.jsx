import React from 'react';

import styles from './Card.module.css';

// Here, dangerouslySetInnerHTML allows us to easily make text bold, italic, etc.
export default function Card({content, color, interpolate}) {
    const colorCheck = color ? {backgroundColor: `var(${color})`} : {backgroundColor: 'var(--white-solid)'}

    return(
        <div className={styles.card} style={colorCheck}>
            {interpolate}
            <p dangerouslySetInnerHTML={{__html: content}} className={styles.cardText}/>
        </div>
    );
}
