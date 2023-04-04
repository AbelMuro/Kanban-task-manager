import React from 'react';
import DialogBox from './DialogBox';
import Switch from './Switch';
import styles from './styles.module.css';
import useLocalStorage from './useLocalStorage';
import icons from './icons';

function SideBar() {
    const boards = useLocalStorage('boards');

    return(
        <aside className={styles.sidebar}>
            <section className={styles.sidebar_top}>
                <img className={styles.sidebar_logo} src={icons['logoLight']}/>
                <div className={styles.sidebar_boards}>
                    <h4 className={styles.sidebar_title}>
                        ALL BOARDS 8
                    </h4>
                    <DialogBox/>
                </div>                 
            </section>

            <section className={styles.sidebar_bottom}>
                <Switch/>
            </section>

        </aside>
    )
}

export default SideBar;