import React, {useState, useEffect} from 'react';
import {Dialog, DialogTitle, DialogContent} from '@mui/material';
import styles from './styles.module.css';

//i will need to make every check box into its own component
function Tasks({task}) {
    const [open, setOpen] = useState(false);

    const handleTask = () => {
        setOpen(!open)
    }

    const handleCheck = (e) => {
        const desc = e.target.nextElementSibling;
        desc.style
    }

    useEffect(() => {
        const handleClick = (e) => {
            if(e.target.matches('.MuiDialog-container'))
                setOpen(false);
        }

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }
    })

    return(      
        <>
            <div className={styles.column_task} onClick={handleTask}>
                <h3 className={styles.column_task_title}>
                    {task.taskTitle}
                </h3>
                <p className={styles.column_task_subtasks}>
                    {`0 of ${task.subTasks.length} subtasks`}
                </p>
            </div>  
            <Dialog open={open}>
                <DialogTitle sx={{padding: '32px 32px 24px 32px'}}>
                    <span className={styles.dialogTitle_title}>
                        {task.taskTitle}                        
                    </span>
                </DialogTitle>
                <DialogContent className={styles.dialogContent} sx={{padding: '0px 32px 32px 32px'}}>
                    <p className={styles.dialogContent_desc}>
                        {task.description}
                    </p>
                    <h5 className={styles.dialogContent_subtasksCompleted}>
                        {`Subtasks (0 of ${task.subTasks.length})`}
                    </h5>
                    <div className={styles.dialogContent_subtasks}>
                        {task.subTasks.map((subtask, i) => {
                            return(
                                <fieldset className={styles.inputContainer} key={i}>
                                    <input type='checkbox' className={styles.inputContainer_checkBoxes} id={i} onClick={handleCheck}/>
                                    <label className={styles.inputContainer_label} htmlFor={i}>
                                        {subtask}
                                    </label>
                                </fieldset>
                            )
                        })}
                    </div>
                </DialogContent>
            </Dialog>      
        </>                          

    )
}

export default Tasks;