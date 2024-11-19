import React from 'react';

import { content } from '../../content';
import Card from '../Card/Card';

import styles from './PageTheory.module.css'
import Figure from '../Figure/Figure';

import merril1 from '../../assets/merril.png';

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
            }}>Theory: Making a Capable CALL Platform</h1> 
            <div className={styles.pageSection}>
                <Figure
                height={350}
                file={merril1} 
                caption='The First Principles of Instruction.'
                />
                <Card
                content={content.theory0}
                />
            </div>

            <div className={styles.pageSection}>
                <Card
                content={content.theory1}
                />
            </div>
        </div>
    );
}
