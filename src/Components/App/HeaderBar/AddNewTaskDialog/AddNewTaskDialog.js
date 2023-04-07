import React, {useState} from 'react';
import TitleInput from './TitleInput';
import DescriptionInput from './DescriptionInput';
import {Dialog, DialogTitle, DialogContent} from '@mui/material';
import styles from './styles.module.css';


//need to create the dialog for adding a new task to a column
function AddNewTaskDialog() {
    const [open, setOpen] = useState(false);


    const handleClick = () => {
        setOpen(!open);
    }   

    return(              
        <>
            <button className={styles.header_addNewTask_button} onClick={handleClick}>
                + Add New Task
            </button>         
            <Dialog open={open}>
                <DialogTitle className={styles.dialogTitle}>
                    <span className={styles.dialogTitle_h1}>    {/* i had to use <span> instead of <h2> because <DialogTitle> gets transpiled into <h2>*/}
                        Add New Task
                    </span>
                </DialogTitle>
                <DialogContent className={styles.dialogContent}>
                    <TitleInput/>
                    <DescriptionInput/>
                </DialogContent>
            </Dialog>
        </>  

    )
}

export default AddNewTaskDialog;