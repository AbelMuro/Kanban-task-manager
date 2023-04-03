import React, {useState} from 'react';
import {Dialog, DialogTitle, DialogContent, DialogActions} from '@mui/material';
import styles from './styles.module.css';

function DialogBox({open, setOpen}) {
    const [boardName, setBoardName] = useState('');

    const handleBoardName = (e) => {
        setBoardName(e.target.value);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleSubmit = () => {
        const prevBoard = JSON.parse(localStorage.getItem('boards'));
        if(prevBoard){
            let boards = JSON.stringify([...prevBoard, boardName]);
            localStorage.setItem('boards', boards);
        }  
        else{
            let newBoard = JSON.stringify([boardName])
            localStorage.setItem('boards', newBoard);

        }
        handleClose();      
    }

    return(            
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
                    <button className={styles.close} onClick={handleClose}>
                        Close
                    </button>
                    <button className={styles.submit} onClick={handleSubmit}>
                        Submit
                    </button>
            </DialogActions>
        </Dialog>
    )
}

export default DialogBox;