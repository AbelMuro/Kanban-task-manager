import React, {useEffect, useState} from 'react';
import { useMediaQuery, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { DisplayBoards} from '../../ReusableComponents';
import { useSelector } from 'react-redux';
import icons from './icons';
import styles from './styles.module.css';


//i will need to make a useEffect that dispatches something to the reducer
function MobileMenu({isMobile}) {
    const [open, setOpen] = useState(false);
    const showSidebar = useSelector(state => state.showSidebar);
    const tablet = useMediaQuery('(max-width: 1000px)');


    const handleMobileMenu = () => {
        setOpen(true);
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
                </DialogContent>
            </Dialog> 
        </>
    )
}

export default MobileMenu;