import React from 'react';
import './Header.css'

export default function Header() {
    return(
        <header className='header'>
            <h1 className='header--h1'>Spaced Pronunciation</h1>
            <div className='header--buttons'>
                <button>Back</button>
                <button>Next</button>
            </div>
        </header>
    );
}
