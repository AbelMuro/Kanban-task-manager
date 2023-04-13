import React, {useState, useEffect, useRef} from 'react';
import styles from './styles.module.css';
import icons from './icons';

function EditOrDelete({handleDelete}) {
    const [open, setOpen] = useState(false);
    const popup = useRef();

    const handlePopup = () => {
        setOpen(!open)
    }

    useEffect(() => {
        if(open)
            popup.current.style.display = 'flex';
        else
            popup.current.style.display = '';
            
    }, [open])

    useEffect(() => {
        const handleClick = (e) => {
            if(!e.target.matches('.' + styles.container) && !e.target.matches('.' + styles.threeDotsIcon) && 
                !e.target.matches('.' + styles.popup) && !e.target.matches('.' + styles.popup_option))
                setOpen(false);
        }

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, [])

    return(
        <div className={styles.container}>
            <img src={icons['threeDots']} className={styles.threeDotsIcon} onClick={handlePopup}/>
            <div className={styles.popup} ref={popup}>
                <button className={styles.popup_option}>
                    Edit Task
                </button>
                <button className={styles.popup_option} onClick={handleDelete}>
                    Delete Task
                </button>
            </div>
        </div>
    )
}

export default EditOrDelete;