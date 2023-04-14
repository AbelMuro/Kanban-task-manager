import React from 'react';
import EditBoardButton from './EditBoardButton';
import AddNewTaskDialog from './AddNewTaskDialog';
import MobileMenu from './MobileMenu';
import { useMediaQuery } from '@mui/material';
import {useSelector} from 'react-redux';
import styles from './styles.module.css';
import icons from './icons'

function HeaderBar() {
    const theme = useSelector(state => state.switchTheme);
    const mobile = useMediaQuery('(max-width: 780px)');

    return(
        <header className={styles.header}>
            <section className={styles.header_kanban}>
                <img src={mobile ? icons['mobileLogo'] : 
                            theme ? icons['logoDarkTheme'] : icons['logoLightTheme']} 
                     className={styles.header_kanban_logo} 
                     alt={'kanban logo'}/>
                <MobileMenu isMobile={mobile}/> 
            </section>
            <section className={styles.header_addNewTask}>   
                <AddNewTaskDialog/>
                <EditBoardButton/>
            </section>
        </header>
    )
}


export default HeaderBar;