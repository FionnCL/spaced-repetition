import React from 'react';

import { references } from '../../references.js'

import './References.css';

export default function References(){
    const referenceMap = references.map(reference => {
        return(
            <p key={reference} className='reference'>{reference}</p>
        );
    });

    return(
        <div className='references'>
            {referenceMap}            
        </div>
    );
}
