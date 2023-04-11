import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import styles from './styles.module.css';
import MessageBox from './MessageBox';
import DisplayColumns from './DisplayColumns';

function BoardColumns() {
    const board = useSelector(state => state.board);
    const sidebar = useSelector(state => state.showSidebar);

    const handleAddNewColumn = () => {

    }

    const handleNewBoard = () => {

    }

    useEffect(() => {
        const container = document.querySelector('.' + styles.container);
        if(sidebar)
            container.style.padding = '0px 0px 0px 300px';
        else
            container.style.padding = '';

    }, [sidebar])

    return (<section className={styles.container}>
        {board ? board.columns.length ?
                <DisplayColumns columns={board.columns}/>  
                :
                <MessageBox 
                    message='This board is empty. Create a new column to get started.'
                    buttonText='+ Add New Column'
                    handler={handleAddNewColumn}
                    /> 
            : 
                <MessageBox 
                    message='There are no boards available. Create a new board to get started.'
                    buttonText='Create Board'
                    handler={handleNewBoard}
                />}  
    </section>)
}
export default BoardColumns;