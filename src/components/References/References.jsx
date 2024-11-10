import React from 'react';

import { references } from '../../references.js'
import Card from '../Card/Card.jsx';

import styles from './References.module.css';

export default function References(){
    const referenceMap = references.map(reference => {
        return(
            <Card
            content={reference}
            />
        );
    });

    return(
        <div style={{
            display: 'flex', flexDirection: 'row',
            margin: '2rem'
        }}>
            <div className={styles.references}>
                {referenceMap}            
            </div>
            <div className={styles.shill}>
                <Card
                interpolate={
                <div>
                    <h2>Check out my portfolio below</h2>
                    <h1><a href='https://fionncl.web.app' target="_blank" rel="noreferrer noopener">FionnCL</a></h1>
                </div>
                }
                />
            </div>
        </div>
    );
}
