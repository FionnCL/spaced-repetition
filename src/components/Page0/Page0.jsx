import React, { useEffect, useState } from 'react';
import { content } from '../../content';

import Card from '../Card/Card';

import './Page0.css'

export default function Page0() {
    const [state, setState] = useState(false);

    useEffect(() => {
        setState(!state);
    },[state]);

    return(
        <div className='page'>
            <div className='grid'>
                <div style={{
                    gridColumn: 1,
                    textAlign: 'center', color: 'var(--black-pastelle)'
                }}> 
                    <h1 style={{
                        borderBottomStyle: 'solid',
                        borderBottomWidth: '2px',
                        borderBottomColor: 'var(--black-pastelle)',
                        paddingBottom: '2rem'
                    }}>Introduction</h1> 
                </div>
                <div style={{
                    gridColumn: 1,
                    textAlign: 'center', color: 'var(--black-pastelle)'
                }}> 
                    <Card content={content.introduction0}/>
                    <Card content={content.introduction1}/>
                </div>
            </div>
        </div>
    );
}
