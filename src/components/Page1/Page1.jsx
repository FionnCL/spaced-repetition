import React, { useState } from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { MdReportGmailerrorred } from "react-icons/md";
import { HiSpeakerWave } from "react-icons/hi2";
import { FaMicrophone } from "react-icons/fa";

// import { content } from '../../content';
import zanahoria from '../../assets/zanahoria.wav';

import './Page1.css'

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
                                    <p>Medium</p>
                                </button>
                                <button onClick={() => setRecallComplete(true)}>
                                    <p>Hard</p>
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
                                <button 
                                className='synthesis'
                                onClick={() => play()}>
                                    <HiSpeakerWave 
                                    size={70} 
                                    style={{color: 'var(--black-pastelle)'}}/> 
                                </button>
                                <button 
                                className='button-synth'
                                onClick={() => setSynthComplete(true)}>
                                    <p>Continue</p>
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
                                    size={70} 
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
        </div>
    );
}
