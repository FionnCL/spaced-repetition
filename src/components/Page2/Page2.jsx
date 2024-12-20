import React from 'react';
import { GiChoice } from "react-icons/gi";
import { LiaUniversitySolid } from "react-icons/lia";
import { FaPencilRuler } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaPersonCircleQuestion } from "react-icons/fa6";

import Card from '../Card/Card';
import Figure from '../Figure/Figure';

import { content } from '../../content';
import methodology1 from '../../assets/methodology1.png';
import methodology2 from '../../assets/methodology2.png';

import styles from './Page2.module.css';

const iconBox = (icon, color) => {
    return(
        <div
        style={{
            backgroundColor: color, borderColor: 'var(--black-pastelle)',
            borderWidth: 1, borderStyle: 'solid', width: 40, height: 40, display: 'flex',
            textAlign: 'center', justifyContent: 'center', alignItems: 'center',
            float: 'left', margin: 5, marginLeft: 0, marginRight: 10,
        }}>
            {icon}
        </div>
    );
};

export default function Page2() {
    return(
        <div className={styles.page}>

            <div className={styles.content} style={{padding: 0}}>
                <h1 style={{
                    borderBottomStyle: 'solid', borderBottomWidth: '2px',
                        borderBottomColor: 'var(--black-pastelle)', paddingLeft: '2rem',
                        paddingRight: '2rem', width: 'fit-content', marginBottom: 0
                }}>Evaluation</h1> 
            </div>

            <div className={styles.content}>

                <Card 
                interpolate={iconBox(<GiChoice size={30}/>, 'var(--red-pastelle)')} 
                content={content.eval0}/>

                <Card 
                interpolate={iconBox(<LiaUniversitySolid size={30}/>, 'var(--purple-pastelle)')} 
                content={content.eval1}/>

            </div>

            <div className={styles.figures}>

                <Figure
                file={methodology1}
                width={'70%'}
                caption='An example of the iterative process for a spaced repetition application, taking perceived usability into account [13].'
                />

                <Figure
                file={methodology2}
                width={'70%'}
                caption="An example of comparing similar CALL apps' performances (Anki + Memrise, Quizlet, Memrise, Memrise) [13]."
                />

            </div>

            <div className={styles.content}>

                    <Card 
                    interpolate={iconBox(<FaPersonCircleQuestion size={30}/>, 'var(--green-pastelle)')} 
                    content={content.eval2}/>

                    <Card 
                    interpolate={iconBox(<FaPencilRuler size={30}/>, 'var(--blue-pastelle)')} 
                    content={content.eval3}/>

                    <Card 
                    interpolate={iconBox(<FaTrophy size={30}/>, 'var(--dark-green-pastelle)')} 
                    content={content.eval4}/>

            </div>
        </div>
    );
}
