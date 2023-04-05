import React, {useRef} from 'react';
import DialogBox from './DialogBox';
import Switch from './Switch';
import styles from './styles.module.css';
import HideShowIcon from './HideShowIcon';
import DisplayBoards from './DisplayBoards';
import icons from './icons';

function SideBar() {
    const hideShowIconRef = useRef();

    const handleEnter = () => {
        hideShowIconRef.current.style.fill = '#635FC7';
    }

    const handleLeave = () => {
        hideShowIconRef.current.style.fill = '';
    }


    return(
        <aside className={styles.sidebar}>
            <section className={styles.sidebar_top}>
                <img className={styles.sidebar_logo} src={icons['logoLight']}/>
                <div className={styles.sidebar_boards}>
                    <h4 className={styles.sidebar_title}>
                        ALL BOARDS 8
                    </h4>
                    <DisplayBoards/>
                    <DialogBox/>
                </div>                 
            </section>

            <section className={styles.sidebar_bottom}>
                <Switch/>
                <button className={styles.sidebar_hideShowButton} onMouseEnter={handleEnter} onMouseLeave={handleLeave}> 
                    <HideShowIcon display={true} ref={hideShowIconRef}/>
                    Hide Sidebar
                </button>
            </section>

        </aside>
    )
}

export default SideBar;