import React, {useRef, useState, useEffect} from 'react';
import AddBoardDialog from './AddBoardDialog';
import Switch from './Switch';
import styles from './styles.module.css';
import HideShowIcon from './HideShowIcon';
import DisplayBoards from './DisplayBoards';
import {useDispatch} from 'react-redux';
import icons from './icons';

function SideBar() {
    const dispatch = useDispatch();
    const [showSidebar, setShowSidebar] = useState(true);
    const hideShowIconRef = useRef();
    const sidebar = useRef();

    const handleEnter = () => {
        hideShowIconRef.current.style.fill = '#635FC7';
    }

    const handleLeave = () => {
        hideShowIconRef.current.style.fill = '';
    }

    const handleSidebar = () => {
        setShowSidebar(!showSidebar);
    }

//this will make the sidebar move to the left and out of the screen
    useEffect(() => {
        if(showSidebar)
            sidebar.current.style.left = '';
        else
            sidebar.current.style.left = '-300px';        
    }, [showSidebar])

//this will dispatch an action to the reducer, telling all components that the sidebar is hidden or visible
    useEffect(() => {
        dispatch({type: 'set sidebar', show: showSidebar});
    }, [showSidebar])

    return(
        <>
            <aside className={styles.sidebar} ref={sidebar}>
                <section className={styles.sidebar_top}>
                    <img className={styles.sidebar_logo} src={icons['logoLight']}/>
                    <div className={styles.sidebar_boards}>
                        <h4 className={styles.sidebar_title}>
                            ALL BOARDS 8
                        </h4>
                        <DisplayBoards/>
                        <AddBoardDialog/>
                    </div>                 
                </section>
                <section className={styles.sidebar_bottom}>
                    <Switch/>
                    <button 
                        className={styles.sidebar_hideShowButton} 
                        onMouseEnter={handleEnter} 
                        onMouseLeave={handleLeave} 
                        onClick={handleSidebar}> 
                            <HideShowIcon display={true} ref={hideShowIconRef}/>
                            Hide Sidebar
                    </button>
                </section>
            </aside>    
            {showSidebar ? 
                <></> : 
                <button className={styles.visibilityButton} onClick={handleSidebar}>
                    <img src={icons['showIcon']} className={styles.visibilityButton_icon}/>
                </button>
            }
        </>

    )
}

export default SideBar;