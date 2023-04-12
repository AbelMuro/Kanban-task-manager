import React, {useState, useRef, useEffect} from 'react';
import ColumnNameInput from './ColumnNameInput';
import {useSelector, useDispatch} from 'react-redux';
import {Dialog, DialogTitle, DialogContent} from '@mui/material';
import styles from './styles.module.css';

function AddNewColumn() {
    const selectedBoard = useSelector(state => state.board);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const newColumn = useRef();

    const handleDialog = () => {
        setOpen(!open);
    }

    const handleSubmit = (e) => {
        const boards = JSON.parse(localStorage.getItem('boards'));
        boards.forEach((board) => {
            if(board.boardName == selectedBoard.boardName)
                board.columns.push(newColumn.current.state);
        })
        localStorage.setItem('boards', JSON.stringify(boards));

        const StorageEvent = new Event('UpdateStorage');
        document.dispatchEvent(StorageEvent);

        dispatch({type: 'set board', board: {boardName: selectedBoard.boardName, columns: [...selectedBoard.columns, newColumn.current.state]}})
    }

    useEffect(() => {
        const addColumnButton = document.querySelector('.' + styles.addNewColumnButton)

        if(selectedBoard.columns.length >= 5)
            addColumnButton.style.display = 'none';
        else
            addColumnButton.style.display = '';

    }, [selectedBoard])

    return(
        <>
            <button className={styles.addNewColumnButton} onClick={handleDialog}>
                + New Column
            </button>
            <Dialog open={open} 
                PaperProps={{style: {
                            backgroundColor: 'var(--dialog-bg-color)',
                        }}}>
                <DialogTitle sx={{padding: '32px 32px 20px 32px'}}>
                    <span className={styles.dialogTitle_title}>
                        Add New Column
                    </span>
                </DialogTitle>
                <DialogContent sx={{padding: '32px'}}>
                    <form onSubmit={handleSubmit}>
                        <ColumnNameInput ref={newColumn}/>
                        <div className={styles.dialogContent_buttons}>
                            <input type='submit' value='Add Column' className={styles.dialogContent_submitButton}/>  
                            <button type='button' className={styles.dialogContent_cancelButton} onClick={handleDialog}>
                                Cancel    
                            </button> 
                        </div>
                     
                    </form>

                </DialogContent>
            </Dialog>
        </>
    )
}

export default AddNewColumn;