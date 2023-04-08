import React, {useState, useEffect} from 'react';
import TitleInput from './TitleInput';
import DescriptionInput from './DescriptionInput';
import SubTasksInput from './SubTasksInput';
import StatusSelectBox from './StatusSelectBox';
import {useSelector} from 'react-redux';
import {Dialog, DialogTitle, DialogContent} from '@mui/material';
import styles from './styles.module.css';


function AddNewTaskDialog() {
    const [open, setOpen] = useState(false);
    const currentBoard = useSelector(state => state.board);

    const handleClick = () => {
        setOpen(!open);
    }   

    useEffect(() => {
        const button = document.querySelector('.' + styles.addNewTask_button);

        if(currentBoard) 
            button.disabled = false;
        else
            button.disabled = true;
        

    }, [currentBoard])

    useEffect(() => {
        const handleClick = (e) => {
            if(e.target.matches('.MuiDialog-container'))
                setOpen(false);
        }
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, [])

    return(              
        <>
            <button className={styles.addNewTask_button} onClick={handleClick}>
                + Add New Task
            </button>         
            <Dialog open={open} PaperProps={{ sx: { overflowY: 'initial'}, style: {
                            backgroundColor: 'var(--dialog-bg-color)',
                            }}}>
                <DialogTitle sx={{padding: '32px 32px 24px 32px'}}>
                    <span className={styles.dialogTitle_h1}>    {/* i had to use <span> instead of <h2> because <DialogTitle> gets transpiled into <h2>*/}
                        Add New Task
                    </span>
                </DialogTitle>
                <DialogContent className={styles.dialogContent} sx={{padding: '0px 32px 24px 32px'}}>
                    <form>
                        <TitleInput/>
                        <DescriptionInput/>
                        <SubTasksInput/>
                        <StatusSelectBox/>     
                        <input 
                            type='submit' 
                            className={styles.dialogContent_submit}
                            value='Create Task'
                        />                  
                    </form>
                </DialogContent>
            </Dialog>
        </>  

    )
}

export default AddNewTaskDialog;