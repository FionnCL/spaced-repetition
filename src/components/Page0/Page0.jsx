import React from 'react';
import { content } from '../../content';

import Card from '../Card/Card';
import ColorCard from '../ColorCard/ColorCard';

import './Page0.css'

export default function Page0() {
    return(
        <div className='page'>
            <div className='left'>
                <div style={{
                    display: 'flex', justifyContent: 'center',
                    textAlign: 'center', color: 'var(--black-pastelle)'
                }}> 
                    <h1 style={{
                        borderBottomStyle: 'solid',
                        borderBottomWidth: '2px',
                        borderBottomColor: 'var(--black-pastelle)',
                        paddingLeft: '2rem',
                        paddingRight: '2rem',
                        width: 'fit-content',
                        marginBottom: 0
                    }}>Motivation</h1> 
               </div>
                <div style={{
                    textAlign: 'center', color: 'var(--black-pastelle)'
                }}> 
                    <Card content={content.introduction0}/>
                    <Card content={content.introduction1}/>
                    <Card content={content.introduction2}/>
                    <div className='infocards'>
                        <div className='infocard'>
                            <p className='infocard--bubble'><b>Speech Synthesis</b></p>
                            <Card content={content.introduction3}/>
                        </div>
                        <div className='infocard'>
                            <p className='infocard--bubble'><b>ASR</b></p>
                            <Card content={content.introduction4}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right'>
                <div style={{
                    display: 'flex', justifyContent: 'center',
                    textAlign: 'center', color: 'var(--black-pastelle)'
                }}> 
                    <h1 style={{
                        borderBottomStyle: 'solid',
                        borderBottomWidth: '2px',
                        borderBottomColor: 'var(--black-pastelle)',
                        paddingLeft: '2rem',
                        paddingRight: '2rem',
                        width: 'fit-content',
                        marginBottom: 0
                    }}>Motivation</h1> 
               </div>
                <div style={{
                    textAlign: 'center', color: 'var(--black-pastelle)'
                }}> 
                    <ColorCard content={content.introduction0} colorVariable={'--red-pastelle'}/>
                    <ColorCard content={content.introduction1} colorVariable={'--green-pastelle'}/>
                    <ColorCard content={content.introduction2}  colorVariable={'--purple-pastelle'}/>
                </div>
            </div>
        </div>
    );
}
