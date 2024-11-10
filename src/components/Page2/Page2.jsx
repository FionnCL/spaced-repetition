import React from 'react';
import { GiChoice } from "react-icons/gi";
import { LiaUniversitySolid } from "react-icons/lia";
import { MdTimer } from "react-icons/md";

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
                caption='Fig 4. Experimental group: Performed better than the control, who had no CAPT to assist them [10].'
                />

                <Figure
                file={captTeacher2}
                height={300}
                caption='Fig 5. Control group: Performed worse than the experimental group, who had CAPT to assist them [10].'
                />

                <Figure
                file={captEfficieny}
                height={200}
                caption='Fig 6. CAPT group spent 103 minutes with the tool. Scored higher than the control on average [9].'
                />

            </div>


            <div className={styles.content}>

                <div style={{width: '50vw'}}>
                    <Card 
                    interpolate={iconBox(<LiaUniversitySolid/>, 'var(--purple-pastelle)')} 
                    content={content.eval3}/>
                </div>

            </div>
        </div>
    );
}