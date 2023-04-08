import React, {useState} from 'react';
import {Dialog, DialogTitle, DialogContent} from '@mui/material';
import BoardNameInput from './BoardNameInput';
import EditColumns from './EditColumns';
import styles from './styles.module.css';

function EditBoardDialog(){
    const [open, setOpen] = useState(false);

    const handlePopup = () => {
        setOpen(!open);
    }

    return( 
        <>
            <button className={styles.editBoard_button} onClick={handlePopup}>
                Edit Board
            </button>
            <Dialog open={open}>
                <DialogTitle sx={{padding: '32px 32px 24px 32px'}}>
                    <span className={styles.dialogTitle_title}>
                        Edit Board
                    </span>
                </DialogTitle>
                <DialogContent className={styles.dialogContent} sx={{padding: '0px 32px 24px 32px'}}>
                    <form>
                        <BoardNameInput/>
                        <EditColumns/> 
                    </form>
                </DialogContent>
            </Dialog>    
        </>            
    )
}

export default EditBoardDialog;