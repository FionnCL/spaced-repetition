import React from 'react';
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

import styles from './Header.module.css';

const whitePastelle = '#f4f4f4';

export default function Header({currPageNumber, maxPageNumber, increment, decrement}) {
    return(
        <header className={styles.header}>
            <div style={{ display: 'flex', flexDirection: 'row'}}>
                <h1 className={styles.headerH1} style={{ letterSpacing: '10px'}}>Spaced&nbsp;</h1> 
                <h1 className={styles.headerH1}>Pronunciation</h1>
            </div>
            <div className={styles.headerButtons}>
                <button onClick={decrement}>
                    <FaChevronCircleLeft 
                    size={40}
                    color={whitePastelle}/>
                </button>
                <p style={{paddingBottom: 3}}><b>{currPageNumber} / {maxPageNumber}</b></p>
                <button onClick={increment}>
                    <FaChevronCircleRight 
                    size={40}
                    color={whitePastelle}/>
                </button>
            </div>
        </header>
    );
}
