import React, {useState, useRef, useEffect} from 'react';
import {Dialog, DialogTitle, DialogContent} from '@mui/material';
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles.module.css';
import BoardNameInput from './BoardNameInput';
import ColumnInputs from './ColumnInputs';

function DialogBox() {
    const open = useSelector(state => state.addBoard);
    const dispatch = useDispatch();
    const boardName = useRef();
    const allColumns = useRef();


    const handleSubmit = (e) => {
        e.preventDefault();

        const prevBoard = JSON.parse(localStorage.getItem('boards'));                                           //getting any previous boards from the local storage
        let columns = allColumns.current.state;
        let boardTitle = boardName.current.state;

        if(prevBoard){
            let boards = JSON.stringify([...prevBoard, {boardName: boardTitle, columns: columns}]);             //grouping together the prevBoards and the new board into an array
            localStorage.setItem('boards', boards);
        }  
        else{
            let newBoard = JSON.stringify([{boardName: boardTitle, columns: columns}])
            localStorage.setItem('boards', newBoard);
        }

        const StorageEvent = new Event('UpdateStorage');
        document.dispatchEvent(StorageEvent); 

        dispatch({type: 'set add board dialog', open: false});
    }

    useEffect(() => {
        const handleClick = (e) => {
            if(e.target.matches('.MuiDialog-container'))
               dispatch({type: 'set add board dialog', open : false});
        }

        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, [])

    return(
        <>
            <Dialog open={open} 
                    PaperProps={{
                            style: {
                            backgroundColor: 'var(--dialog-bg-color)',
                            },
                        }}>
                <DialogTitle className={styles.dialog_title}>
                    Add New Board
                </DialogTitle>
                <DialogContent className={styles.dialog_content} sx={{padding: '0px 32px 32px 32px'}}>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <BoardNameInput ref={boardName}/>
                        <ColumnInputs ref={allColumns}/>
                        <input type='submit' className={styles.dialog_submit} value='Create New Board'/>
                    </form>
                </DialogContent>
            </Dialog>        
        </>       

    )
}

export default DialogBox;