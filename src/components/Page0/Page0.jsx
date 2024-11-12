import React from 'react';
import { FaEarListen } from "react-icons/fa6";
import { SlSpeech } from "react-icons/sl";
import { LuGoal } from "react-icons/lu";

import { content } from '../../content';
import Card from '../Card/Card';

import styles from './Page0.module.css'
import Figure from '../Figure/Figure';

import retentionInterval from '../../assets/retention-interval.png';
import asrEffectiveness from '../../assets/asr-effectiveness.png';
import asrVersusEvaluators from '../../assets/asr-vs-evaluators.png';

const goalBox = (
    <div style={{ 
        display: 'flex', borderColor: 'var(--black-pastelle)', 
        borderWidth: 1, borderStyle: 'solid',
        width: 30, height: 30, justifyContent: 'center',
        textAlign: 'center', alignItems: 'center',
        backgroundColor: 'var(--green-pastelle)',
        float: 'left', margin: 5, marginLeft: 0, marginRight: 10,
    }}>
        <LuGoal/>
    </div>
);

export default function Page0() {
    return(
        <div className={styles.page}>
            <div className={styles.left}>
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
                    <Card content={content.introduction1} interpolate={goalBox}/>
                    <Card content={content.introduction2}/>
                    <div className={styles.infocards}>
                        <div className={styles.infocard}>
                            <p className={styles.infocardBubble}><b>Speech Synthesis <SlSpeech/></b></p>
                            <Card content={content.introduction3}/>
                        </div>
                        <div className={styles.infocard}>
                            <p className={styles.infocardBubble}><b>ASR <FaEarListen/></b></p>
                            <Card content={content.introduction4}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
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
                    }}>Literature</h1> 
               </div>
                <div style={{
                    textAlign: 'center', color: 'var(--black-pastelle)'
                }}> 
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Card content={content.introduction5} color={'--red-pastelle'}/>
                    <Card content={content.introduction6} color={'--green-pastelle'}/>
                    <Card content={content.introduction7}  color={'--purple-pastelle'}/>
                </div>
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        flexDirection: 'row', 
                        paddingTop: '2rem',
                        paddingBottom: '2rem',
                    }}>
                        <Figure 
                        width={'400px'} 
                        file={retentionInterval} 
                        caption={'Fig 1. A scatter plot of retention-interval to study-interval (spaced repetition) [5].'}/>
                        <Figure 
                        width={'400px'} 
                        file={asrVersusEvaluators} 
                        caption={'Fig 2. ASR vs. professional evaluators scoring participant pronunciation [9].'}/>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center'}}>
                        <Figure 
                        width={'500px'} 
                        file={asrEffectiveness} 
                        caption={'Fig 3. Control group vs. experimental group using an ASR tool to train pronunciation [8].'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
