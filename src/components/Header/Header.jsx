import React from 'react';
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

import './Header.css'

const whitePastelle = '#f4f4f4';

export default function Header() {
    return(
        <header className='header'>
            <div style={{ display: 'flex', flexDirection: 'row'}}>
                <h1 className='header--h1' style={{ letterSpacing: '5px'}}>Spaced&nbsp;</h1> 
                <h1 className='header--h1'>Pronunciation</h1>
            </div>
            <div className='header--buttons'>
                <button>
                    <FaChevronCircleLeft 
                    size={40}
                    color={whitePastelle}/>
                </button>
                <button>
                    <FaChevronCircleRight 
                    size={40}
                    color={whitePastelle}/>
                </button>
            </div>
        </header>
    );
}
