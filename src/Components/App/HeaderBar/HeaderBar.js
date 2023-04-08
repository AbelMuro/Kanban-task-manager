import React, {useEffect} from 'react';
import EditBoardButton from './EditBoardButton';
import AddNewTaskDialog from './AddNewTaskDialog';
import {useSelector} from 'react-redux';
import styles from './styles.module.css';
import icons from './icons'

function HeaderBar() {
    const showSidebar = useSelector(state => state.showSidebar);

    //this will move the platform launch title to the right when the sidebar is visible
    useEffect(() => {
        const platformLaunchTitle = document.querySelector('.' + styles.header_kanban_title);

        if(showSidebar)
            platformLaunchTitle.style.left = '70px';
        else
            platformLaunchTitle.style.left = '' 

    }, [showSidebar])



    return(
        <header className={styles.header}>
            <section className={styles.header_kanban}>
                <img src={icons['logoLightTheme']} className={styles.header_kanban_logo} alt={'kanban logo'}/>
                <h1 className={styles.header_kanban_title}>
                    Platform Launch
                </h1>                
            </section>
            <section className={styles.header_addNewTask}>   
                <AddNewTaskDialog/>
                <EditBoardButton/>
            </section>
        </header>
    )
}


export default HeaderBar;