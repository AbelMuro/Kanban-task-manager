import React, {useState, useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';
import styles from './styles.module.css';
import icons from './icons';

function EditBoardButton() {
    const currentBoard = useSelector(state => state.board);
    const [displayPopup, setDisplayPopup] = useState(false);
    const popup = useRef();

    const handlePopup = () => {
        setDisplayPopup(!displayPopup);
    }

    useEffect(() => {
        if(displayPopup)
            popup.current.style.display = 'flex';
        else
            popup.current.style.display = '';

    }, [displayPopup])

    useEffect(() => {
        const handleClick = (e) => {
            if(!e.target.matches('.' + styles.selectBox) && !e.target.matches('.' + styles.selectBox_threeDots_button) && 
               !e.target.matches('.' + styles.selectBox_popup) && !e.target.matches('.' + styles.selectBox_popup_option))
                setDisplayPopup(false);
        }
        if(displayPopup)
            document.addEventListener('click', handleClick);
        else
            document.removeEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [displayPopup])

    return(
        <section className={styles.selectBox}>
            <img src={icons['threeDots']} 
                className={styles.selectBox_threeDots_button} 
                onClick={handlePopup}/>
            <div className={styles.selectBox_popup} ref={popup}>
                <a className={styles.selectBox_popup_option}>
                    Edit Board
                </a>
                <a className={styles.selectBox_popup_option}>
                    Delete Board
                </a>
            </div>
        </section>                

    )
}

export default EditBoardButton;