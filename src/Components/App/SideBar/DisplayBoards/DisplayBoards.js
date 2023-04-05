import React, {useState, useEffect} from 'react';
import BoardIcon from '../BoardIcon';
import useLocalStorage from '../../useLocalStorage';
import {v4 as uuid} from 'uuid';
import styles from './styles.module.css';


function DisplayBoards() {
    const boards = useLocalStorage('boards');
    const [choosenBoard, setChoosenBoard] = useState(boards[0])

    const handleEnter = (e) => {
        const boardIcon = e.target.firstElementChild.firstElementChild;
        boardIcon.classList.add(styles.sidebar_board_icon_hover);
    }

    const handleLeave = (e) => {
        const boardIcon = e.target.firstElementChild.firstElementChild;
        boardIcon.classList.remove(styles.sidebar_board_icon_hover);
    }

    const handleClick = (e) => {
        const boardChoosen = e.target.getAttribute('data-board');
        setChoosenBoard(boardChoosen);
    }

    //removing the purple background color from the previously selected board
    useEffect(() => {
        const allBoards = document.querySelectorAll('.' + styles.sidebar_board);
        allBoards.forEach((board) => {
            if(board.classList.contains(styles.sidebar_board_active))
                board.classList.remove(styles.sidebar_board_active);
        
        })
    }, [choosenBoard])

    //adding a purple background color to the currently selected board
    useEffect(() => {
        const allBoards = document.querySelectorAll('.' + styles.sidebar_board);
        allBoards.forEach((board) => {
            const boardID = board.getAttribute('data-board');
            if(boardID == choosenBoard)
                board.classList.add(styles.sidebar_board_active);
        })
    }, [choosenBoard])

    return(
        <>
            {boards.map((board) => {
                return(
                    <div 
                        className={styles.sidebar_board} 
                        key={uuid()} 
                        data-board={board}
                        onMouseEnter={handleEnter} 
                        onMouseLeave={handleLeave} 
                        onClick={handleClick}>
                            <BoardIcon/>
                            {board}
                    </div>
                )
            })}        
        </>
    )
}

export default DisplayBoards;
