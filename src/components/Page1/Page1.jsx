import React, { useState } from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { MdReportGmailerrorred } from "react-icons/md";
import { HiSpeakerWave } from "react-icons/hi2";
import { FaMicrophone } from "react-icons/fa";

import { content } from '../../content';
import zanahoria from '../../assets/zanahoria.wav';
import pipeline from '../../assets/pipeline.png';

import './Page1.css'
import Card from '../Card/Card';

const transition = (top, bottom) => {
    return(
        <div className='pipeline--transition'>
            <h3>{top}</h3>
            <FaArrowAltCircleRight size={30} style={{ color: 'var(--black-pastelle)'}}/>
            <h3>{bottom}</h3>
        </div>
    );
};

const deckBar = () => {
    return(
        <div className='pipeline--card--bar'>
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
}

export default function Page1() {
    const [recallComplete, setRecallComplete] = useState(false);
    const [synthComplete, setSynthComplete] = useState(false);
    const [recording, setRecording] = useState(false);
    const [asrComplete, setAsrComplete] = useState(false);

    const play = () => {
        new Audio(zanahoria).play();
    };

    return(
        <div className='page'>
            <div className='pipeline'>

                <div className='pipeline--element'>
                    <h1>Recall</h1>
                    <div className='pipeline--card'>
                        {deckBar()}
                        <div className='pipeline--card--content'>
                            { recallComplete ?
                            <h3>La Zanahoria</h3>
                            :
                            <h3>The Carrot</h3>
                            }
                            <div className='button-group'>
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

                <div className='pipeline--element'>
                    <h1>Listen</h1>
                    <div className='pipeline--card'>
                        {deckBar()}
                        <div 
                        className='pipeline--card--content'
                        style={{alignItems: 'center', height: '85%'}}>
                            { recallComplete ?
                            <div>
                                <h3 style={{margin: '0.25rem'}}>La Zanahoria</h3>
                                <button 
                                className='synthesis'
                                onClick={() => play()}>
                                    <HiSpeakerWave 
                                    size={40} 
                                    style={{color: 'var(--black-pastelle)'}}/> 
                                </button>
                                <button 
                                className='button-synth'
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

                <div className='pipeline--element'>
                    <h1>Pronounce</h1>
                    <div className='pipeline--card'>
                        {deckBar()}
                        <div className='pipeline--card--content'
                        style={{alignItems: 'center', height: '85%'}}>
                            { recallComplete && synthComplete ?
                            <div>
                                <h3 style={{margin: '0.25rem'}}>La Zanahoria</h3>
                                <button 
                                className='synthesis'
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
                                className='button-synth'
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
            <div className='content'>
                <div className='content--side'>
                    <h1 style={{
                        borderBottomStyle: 'solid',
                        borderBottomWidth: '2px',
                        borderBottomColor: 'var(--black-pastelle)',
                        paddingLeft: '2rem',
                        paddingRight: '2rem',
                        width: 'fit-content',
                        marginBottom: 0
                    }}>The Process</h1> 
                    <Card content={content.pipeline0}/>
                </div>
                <Card interpolate={
                    <img 
                    src={pipeline}
                    alt='The user process of recalling, listening, and pronouncing each card in a deck.'
                    height={350}/>
                }/>
            </div>
        </div>
    );
}
