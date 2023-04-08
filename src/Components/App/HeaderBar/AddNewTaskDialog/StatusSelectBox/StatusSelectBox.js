import React, {useState, useRef, useEffect} from 'react';
import styles from './styles.module.css';
import icons from './icons';


function StatusSelectBox() {
    const [option, setOption] = useState('Todo');
    const [openPopup, setOpenPopup] = useState(false);
    const popup = useRef();

    const handleClick = () => {
        setOpenPopup(!openPopup);
    }

    const handleOption = (e) => {
        const choosenOption = e.target.getAttribute('data-option');
        setOption(choosenOption);
    }

//this will make the popup appear when the user clicks on the select box
    useEffect(() => {
        if(openPopup)
            popup.current.style.display = 'flex';
        else
            popup.current.style.display = '';
    }, [openPopup])

    useEffect(() => {
        const dialogContent = document.querySelector('.MuiDialogContent-root');

        if(openPopup)
            dialogContent.scrollTo(0, dialogContent.scrollHeight)

    }, [openPopup])

//adding an event listener that will close the popup when the user clicks on anything BUT the popup
    useEffect(() => {
        const handleClick = (e) => {
            if(!e.target.matches('.' + styles.select_popup) && 
               !e.target.matches('.' + styles.select_box))
                setOpenPopup(false);
        }

        if(openPopup)
            document.addEventListener('click', handleClick);
        else
            document.removeEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, [openPopup])


    return(
        <section className={styles.select}>
            <h5 className={styles.select_title}>
                Status
            </h5>
            <div className={styles.select_box} onClick={handleClick}>
                {option}
                <img src={icons['arrow']} className={styles.select_box_arrow}/>
            </div>
            <div className={styles.select_popup} ref={popup}>
                <button type='button' className={styles.select_popup_option} onClick={handleOption} data-option='Todo'>
                    Todo
                </button>
                <button type='button' className={styles.select_popup_option} onClick={handleOption} data-option='Doing'>
                    Doing
                </button>
                <button type='button' className={styles.select_popup_option} onClick={handleOption} data-option='Done'>
                    Done
                </button>
                <button type='button' className={styles.select_popup_option} onClick={handleOption} data-option='Done'>
                    Done
                </button>
                <button type='button' className={styles.select_popup_option} onClick={handleOption} data-option='Done'>
                    Done
                </button>
            </div>
        </section>
    )
}

export default StatusSelectBox;