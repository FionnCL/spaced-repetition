import React from 'react';
import { GiChoice } from "react-icons/gi";
import { LiaUniversitySolid } from "react-icons/lia";
import { MdTimer } from "react-icons/md";
import { FaPencilRuler } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";

import Card from '../Card/Card';

import { content } from '../../content';
import captTeacher1 from '../../assets/capt-teacher1.png';
import captTeacher2 from '../../assets/capt-teacher2.png';
import captEfficieny from '../../assets/capt-efficiency.png';

import styles from './Page2.module.css';
import Figure from '../Figure/Figure';

const iconBox = (icon, color) => {
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
                interpolate={iconBox(<GiChoice/>, 'var(--red-pastelle)')} 
                content={content.eval0}/>

                <Card 
                interpolate={iconBox(<LiaUniversitySolid/>, 'var(--purple-pastelle)')} 
                content={content.eval1}/>

                <Card 
                interpolate={iconBox(<MdTimer/>, 'var(--green-pastelle)')} 
                content={content.eval2}/>

            </div>
            <div className={styles.figures}>

                <Figure
                file={captTeacher1}
                height={300}
                caption='Fig 4. Teacher+CAPT: no idea how much influence this particular teacher had on the students [10].'
                />

                <Figure
                file={captTeacher2}
                height={300}
                caption='Fig 5. Just teacher: similar problem to Teacher+CAPT group. How would they have done with CAPT? [10].'
                />

                <Figure
                file={captEfficieny}
                height={200}
                caption='Fig 6. CAPT group spent 103 minutes with the tool. They scored higher than the group control on average [9].'
                />

            </div>


            <div className={styles.content}>

                    <Card 
                    interpolate={iconBox(<FaPencilRuler/>, 'var(--blue-pastelle)')} 
                    content={content.eval3}/>

                    <Card 
                    interpolate={iconBox(<FaTrophy/>, 'var(--dark-green-pastelle)')} 
                    content={content.eval4}/>

            </div>
        </div>
    );
}
