import React, { useState } from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { MdReportGmailerrorred } from "react-icons/md";
import { HiSpeakerWave } from "react-icons/hi2";
import { FaMicrophone } from "react-icons/fa";
import { TbHexagonNumber1Filled } from "react-icons/tb";
import { TbHexagonNumber2Filled } from "react-icons/tb";
import { TbHexagonNumber3Filled } from "react-icons/tb";

import { content } from '../../content';
import zanahoria from '../../assets/zanahoria.wav';
import pipeline from '../../assets/pipeline.png';

import styles from './Page1.module.css'
import Card from '../Card/Card';

const transition = (top, bottom) => {
    return(
        <div className={styles.pipelineTransition}>
            <h3>{top}</h3>
            <FaArrowAltCircleRight size={30} style={{ color: 'var(--black-pastelle)'}}/>
            <h3>{bottom}</h3>
        </div>
    );
};

const deckBar = () => {
    return(
        <div className={styles.pipelineCardBar}>
            <p><i>Spanish Deck</i></p>
            <p><i>[4/20] Cards</i></p>
        </div>
    );
}

const lastTaskError = () => {
    return(
        <div>
            <MdReportGmailerrorred 
            size={100} 
            style={{color: 'var(--black-pastelle)'}}/> 
            <p style={{color: 'var(--black-pastelle)', margin: 0}}>Complete Last Task</p>
        </div>
    );
};

const numBox = (icon, color) => {
    return(
        <div
        style={{
            backgroundColor: color, borderColor: 'var(--black-pastelle)',
            borderWidth: 1, borderStyle: 'solid', width: 30, height: 30, display: 'flex',
            textAlign: 'center', justifyContent: 'center', alignItems: 'center',
            float: 'left', margin: 5, marginLeft: 0, marginRight: 10,
        }}>
            {icon}
        </div>
    );
};

export default function Page1() {
    const [recallComplete, setRecallComplete] = useState(false);
    const [synthComplete, setSynthComplete] = useState(false);
    const [recording, setRecording] = useState(false);
    const [asrComplete, setAsrComplete] = useState(false);

    const play = () => {
        new Audio(zanahoria).play();
    };

    return(
        <div className={styles.page}>
            <div className={styles.pipeline}>

                <div className={styles.pipelineElement}>
                    <h1>Recall</h1>
                    <div className={styles.pipelineCard}>
                        {deckBar()}
                        <div className={styles.pipelineCardContent}>
                            { recallComplete ?
                            <h3>La Zanahoria</h3>
                            :
                            <h3>The Carrot</h3>
                            }
                            <div className={styles.buttonGroup}>
                                <button onClick={() => setRecallComplete(true)}>
                                    <p>Easy</p>
                                </button>
                                <button onClick={() => setRecallComplete(true)}>
                                    <p>Hard</p>
                                </button>
                                <button onClick={() => setRecallComplete(true)}>
                                    <p>No Recall</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {transition('Correctly', 'recalled')}

                <div className={styles.pipelineElement}>
                    <h1>Listen</h1>
                    <div className={styles.pipelineCard}>
                        {deckBar()}
                        <div 
                        className={styles.pipelineCardContent}
                        style={{alignItems: 'center', height: '85%'}}>
                            { recallComplete ?
                            <div>
                                <h3 style={{margin: '0.25rem'}}>La Zanahoria</h3>
                                <button 
                                className={styles.synthesis}
                                onClick={() => play()}>
                                    <HiSpeakerWave 
                                    size={40} 
                                    style={{color: 'var(--black-pastelle)'}}/> 
                                </button>
                                <button 
                                className={styles.buttonSynth}
                                onClick={() => setSynthComplete(true)}>
                                    Continue to ASR
                                </button>
                            </div>
                            :
                            lastTaskError()
                            }
                        </div>
                    </div>
                </div>

                {transition('Pronunciation', 'studied')}

                <div className={styles.pipelineElement}>
                    <h1>Pronounce</h1>
                    <div className={styles.pipelineCard}>
                        {deckBar()}
                        <div className={styles.pipelineCardContent}
                        style={{alignItems: 'center', height: '85%'}}>
                            { recallComplete && synthComplete ?
                            <div>
                                <h3 style={{margin: '0.25rem'}}>La Zanahoria</h3>
                                <button 
                                className={styles.synthesis}
                                style={ recording ? { borderColor: '#FF5555'}
                                    : {}}
                                onClick={() => {
                                    if(!recording){
                                        setRecording(true);
                                    } else {
                                        setRecording(false);
                                        setAsrComplete(true);
                                    }
                                }}>
                                    <FaMicrophone
                                    size={40} 
                                    style={{color: 'var(--black-pastelle)'}}/> 
                                </button>
                                <button 
                                className={styles.buttonASR}
                                style={ !asrComplete ? { backgroundColor: 'var(--red-pastelle)'}
                                    : { backgroundColor: 'var(--green-pastelle)'}}>
                                    { !asrComplete ? 'No Pronunciation' : 'Correct Pronunciation' }
                                </button>
                            </div>
                            :
                            lastTaskError()
                            }
                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.content}>
                <div className={styles.contentSide}>
                    <h1 style={{
                        borderBottomStyle: 'solid',
                        borderBottomWidth: '2px',
                        borderBottomColor: 'var(--black-pastelle)',
                        paddingLeft: '2rem',
                        paddingRight: '2rem',
                        marginTop: 0,
                        width: 'fit-content',
                        marginBottom: 0
                    }}>The Process</h1> 
                    <Card 
                    interpolate={numBox(<TbHexagonNumber1Filled/>, 'var(--yellow-pastelle)')} 
                    content={content.pipeline0}/>
                    <Card 
                    interpolate={numBox(<TbHexagonNumber2Filled/>, 'var(--yellow-pastelle)')} 
                    content={content.pipeline1}/>
                    <Card 
                    interpolate={numBox(<TbHexagonNumber3Filled/>, 'var(--yellow-pastelle)')} 
                    content={content.pipeline2}/>
                </div>
                <Card interpolate={
                    <img 
                    src={pipeline}
                    alt='The user process of recalling, listening, and pronouncing each card in a deck.'
                    height={400}/>
                }/>
            </div>
        </div>
    );
}
