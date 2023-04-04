import React from 'react';
import DialogBox from './DialogBox';
import Switch from './Switch';
import styles from './styles.module.css';
import useLocalStorage from './useLocalStorage';
import HideShowIcon from './HideShowIcon';
import icons from './icons';

function SideBar() {
    const boards = useLocalStorage('boards');

    const handleHover = (e) => {
        console.log(e.target.firstElementChild);
    }

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
                <button className={styles.sidebar_hideShowButton} onMouseEnter={handleHover}> 
                    <HideShowIcon display={true}/>
                    Hide Sidebar
                </button>
            </section>

        </aside>
    )
}

export default SideBar;