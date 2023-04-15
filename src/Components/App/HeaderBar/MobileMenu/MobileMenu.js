import React, {useEffect, useState} from 'react';
import { useMediaQuery, Dialog, DialogContent } from '@mui/material';
import { DisplayBoards, useLocalStorage, Switch} from '../../ReusableComponents';
import { useSelector, useDispatch } from 'react-redux';
import icons from './icons';
import styles from './styles.module.css';

// now i need to restyle this component with css variables
function MobileMenu({isMobile}) {
    const [open, setOpen] = useState(false);
    const showSidebar = useSelector(state => state.showSidebar);
    const dispatch = useDispatch();
    const tablet = useMediaQuery('(max-width: 1000px)');
    const boards = useLocalStorage('boards');

    const handleMobileMenu = () => {
        setOpen(true);
    }

    const handleAddBoardDialog = () => {
        dispatch({type: 'set add board dialog', open: true});
    }

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

    //i need this useEffect to dispatch something to the reducer because initially the store doesnt have a board when the app is first viewed in mobile
    useEffect(() => {
        if(boards.length)
            dispatch({type: 'set board', board: boards[0]});
    }, [])

    return(
        <>
            <h1 className={styles.header_kanban_title} onClick={isMobile ? handleMobileMenu : () => {}}>
                Platform Launch
                {isMobile ? 
                    <img src={icons['arrowDown']} className={styles.arrowDown}/> 
                    : 
                    <></>}
            </h1>
            <Dialog open={open}>
                <DialogContent sx={{padding: '16px 24px 16px 0px'}}>
                    <DisplayBoards/>
                    <button className={styles.addBoardButton} onClick={handleAddBoardDialog}>
                        <img className={styles.iconBoard} src={icons['iconBoard']} alt='board icon'/>
                        + Create New Board
                    </button>
                    <Switch/>
                </DialogContent>
            </Dialog> 
        </>
    )
}

export default MobileMenu;