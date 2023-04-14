import React, {useEffect} from 'react';
import EditBoardButton from './EditBoardButton';
import AddNewTaskDialog from './AddNewTaskDialog';
import MobileMenu from './MobileMenu';
import { useMediaQuery } from '@mui/material';
import {useSelector} from 'react-redux';
import styles from './styles.module.css';
import icons from './icons'

function HeaderBar() {
    const showSidebar = useSelector(state => state.showSidebar);
    const theme = useSelector(state => state.switchTheme);
    const tablet = useMediaQuery('(max-width: 1000px)');
    const mobile = useMediaQuery('(max-width: 780px)');

    //this will move the platform launch title to the right when the sidebar is visible
    useEffect(() => {
        const platformLaunchTitle = document.querySelector('.' + styles.header_kanban_title);

        if(showSidebar){
            if(tablet)
                platformLaunchTitle.style.left = '40px';
            else
                platformLaunchTitle.style.left = '80px';
        }
        else
            platformLaunchTitle.style.left = '' 

    }, [showSidebar, tablet])


    return(
        <header className={styles.header}>
            <section className={styles.header_kanban}>
                <img src={mobile ? icons['mobileLogo'] : 
                            theme ? icons['logoDarkTheme'] : icons['logoLightTheme']} 
                     className={styles.header_kanban_logo} 
                     alt={'kanban logo'}/>
                    {mobile ? <MobileMenu/> : 
                        <h1 className={styles.header_kanban_title}>
                            Platform Launch
                        </h1>}              
            </section>
            <section className={styles.header_addNewTask}>   
                <AddNewTaskDialog/>
                <EditBoardButton/>
            </section>
        </header>
    )
}


export default HeaderBar;