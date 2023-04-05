import React, {useState} from 'react';
import {Dialog, DialogTitle, DialogContent, DialogActions} from '@mui/material';
import BoardIcon from '../BoardIcon';
import styles from './styles.module.css';

function DialogBox() {
    const [open, setOpen] = useState(false);
    const [boardName, setBoardName] = useState('');

    const handleBoardName = (e) => {
        setBoardName(e.target.value);
    }

    const handleDialog = () => {
        setOpen(!open);
    }


    const handleSubmit = () => {
        const prevBoard = JSON.parse(localStorage.getItem('boards'));           //getting any previous boards from the local storage
        if(prevBoard){
            let boards = JSON.stringify([...prevBoard, boardName]);             //grouping together the prevBoards and the new board into an array
            localStorage.setItem('boards', boards);
        }  
        else{
            let newBoard = JSON.stringify([boardName])
            localStorage.setItem('boards', newBoard);
        }
        const StorageEvent = new Event('StorageEvent')
        document.dispatchEvent(StorageEvent);
        handleDialog();      
    }

    return(
        <>
            <button className={styles.sidebar_addBoardButton} onClick={handleDialog}>
                <BoardIcon/>
                +Create New Board
            </button>
            <Dialog open={open}>
                <DialogTitle>
                    Add New Board
                </DialogTitle>
                <DialogContent>
                    <fieldset className={styles.inputContainer}>
                        <label>
                            Board Name
                        </label>
                        <input 
                            className={styles.input} 
                            value={boardName}
                            onChange={handleBoardName}
                            />
                    </fieldset>
                </DialogContent>
                <DialogActions>
                        <button className={styles.close} onClick={handleDialog}>
                            Close
                        </button>
                        <button className={styles.submit} onClick={handleSubmit}>
                            Submit
                        </button>
                </DialogActions>
            </Dialog>        
        </>       

    )
}

export default DialogBox;