import React from 'react';

import { content } from '../../content';
import Card from '../Card/Card';

import styles from './PageTheory.module.css'
import Figure from '../Figure/Figure';

import merril1 from '../../assets/merril.png';
import merril2 from '../../assets/merril2.png';
import tatl from '../../assets/tatl.png';

export default function PageTheory() {
    return(
        <div className={styles.page}>
            <h1 style={{
                borderBottomStyle: 'solid',
                borderBottomWidth: '2px',
                borderBottomColor: 'var(--black-pastelle)',
                paddingLeft: '2rem',
                paddingRight: '2rem',
                width: 'fit-content',
                marginBottom: '2rem',
            }}>Theory</h1> 
            <div className={styles.pageSection}>
                <Figure
                height={350}
                file={merril1} 
                caption='First principles of interaction.'
                />
                <Card
                content={content.theory0}
                />
            </div>

            <div className={styles.pageSection}>
                <Card
                content={content.theory1}
                />
                <Figure
                file={tatl}
                height={350}
                caption='Another depiction of FPI.'
                />
            </div>

            <div className={styles.pageSection}>
                <img
                src={merril2}
                height={350}
                alt='First principles of interaction.'
                />
                <Card
                content={content.theory1}
                />
            </div>
        </div>
    );
}
