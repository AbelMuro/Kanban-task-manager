import React, {useState} from 'react';
import DialogBox from './DialogBox';
import styles from './styles.module.css';
import useLocalStorage from './useLocalStorage';

function SideBar() {
    const [open, setOpen] = useState(false);
    const boards = useLocalStorage('boards');
    console.log(boards)


    return(
        <aside className={styles.sidebar}>
            <img className={styles.sidebar_logo}/>
            <h3 className={styles.sidebar_title}>
                ALL BOARDS 8
            </h3>
            <section className={styles.sidebar_boards}>
                <DialogBox/>
            </section> 
        </aside>
    )
}

export default SideBar;