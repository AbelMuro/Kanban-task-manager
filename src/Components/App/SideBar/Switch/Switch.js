import React, {useRef, useState, useEffect} from 'react';
import styles from './styles.module.css';
import icons from './icons';

function Switch(){ 
    const handleRef = useRef();
    const [turnSwitch, setTurnSwitch] = useState(false);

    const handleSwitch = () => {
        setTurnSwitch(!turnSwitch);
    }

    useEffect(() => {
        if(turnSwitch)
            handleRef.current.style.left = '23px'
        else 
            handleRef.current.style.left = '';

    }, [turnSwitch])

    return(
            <div className={styles.switchBox} >
                <img className={styles.themeIcon} src={icons['dayThemeIcon']}/>
                <div className={styles.switch} onClick={handleSwitch}>
                    <div className={styles.handle} ref={handleRef}></div>
                </div>
                <img className={styles.themeIcon} src={icons['nightThemeIcon']}/> 
            </div>
    )
}

export default Switch;