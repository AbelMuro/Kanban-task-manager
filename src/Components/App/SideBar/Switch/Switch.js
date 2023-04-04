import React from 'react';
import styles from './styles.module.css';

function Switch(){ 
    return(
            <div className={styles.switchBox}>
                <img className={styles.dayIcon}/>
                <div className={styles.switch}>
                    <div className={styles.handle}></div>
                </div>
                <img className={styles.nightIcon}/> 
            </div>
    )
}

export default Switch;