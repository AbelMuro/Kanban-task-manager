import React from 'react';
import {useSelector} from 'react-redux';
import MessageBox from './MessageBox';
import styles from './styles.module.css';

//i will need to import the sidebar state from the reducer and style this component accordingly
function BoardColumns() {
    const board = useSelector(state => state.board);

    const handleAddNewColumn = () => {

    }

    const handleNewBoard = () => {

    }

    return board ? (
        <section className={styles.columns}>
            {board.columns.length ?
                <MessageBox 
                    message='This board is empty. Create a new column to get started.'
                    buttonText='+ Add New Column'
                    handler={handleAddNewColumn}
                    /> : 
                <></>
            }
        </section>
    ) : (
        <MessageBox 
            message='There are no boards available. Create a new board to get started.'
            buttonText='Create Board'
            handler={handleNewBoard}
        />
    )
}
export default BoardColumns;