import React from 'react';

import { references } from '../../references.js'
import Card from '../Card/Card.jsx';

import styles from './References.module.css';

export default function References(){
    const referenceMap = references.map(reference => {
        return(
            <div className={styles.reference}>
                <Card
                key={reference}
                content={reference}
                />
            </div>
        );
    });

    return(
        <div>
            <div className={styles.references}>
                {referenceMap}            
            </div>
        </div>
    );
}
