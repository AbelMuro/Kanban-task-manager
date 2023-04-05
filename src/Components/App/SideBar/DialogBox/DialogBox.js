import React, {useState} from 'react';
import {Dialog, DialogTitle, DialogContent, DialogActions} from '@mui/material';
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
                <svg className={styles.iconContainer} width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path className={styles.icon} d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"/>
                </svg>        
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