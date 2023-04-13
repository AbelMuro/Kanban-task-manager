import React, {useState, useEffect, useRef} from 'react';
import {Dialog, DialogTitle, DialogContent} from '@mui/material';
import {useSelector} from 'react-redux';
import EditOrDeleteTask from './EditOrDeleteTask';
import CheckBox from './CheckBox';
import SelectBox from './SelectBox';
import styles from './styles.module.css';

function Tasks({currentTask, columnTitle}) {
    const currentBoard = useSelector(state => state.board);
    const [open, setOpen] = useState(false);
    const [completed, setCompleted] = useState(0);
    const allCheckboxes = useRef([])

    const handleTask = () => {
        setOpen(!open)
    }

    const handleCompleted = (complete) => {
        if(complete){
            setCompleted((prevState) => {
                return prevState + 1;
            })            
        }
        else{
            setCompleted((prevState) => {
                return prevState - 1;
            })
        }
    }

    const handleDelete = () => {
        const boards = JSON.parse(localStorage.getItem('boards'));
        boards.every((board) => {
            if(board.boardName == currentBoard.boardName){
                board.columns.every((column) => {
                    if(column.columnTitle == columnTitle){
                        column.every((task) => {
                            if(task.taskTitle == currentTask.taskTitle){
                                //this is where i left off
                            }

                        }) 
                        return false                       
                    }

                })
                return false;
            }

        })
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

    useEffect(() => {
        let completedTasks = 0;

        currentTask.subTasks.forEach((subtask) => {
            if(subtask.completed)
                completedTasks++;
        })

        setCompleted(completedTasks);

    }, [])

    //resets the state
    useEffect(() => {
        if(!open)
            setCompleted(0);
        
    }, [open])

    return(      
        <>
            <div className={styles.column_task} onClick={handleTask}>
                <h3 className={styles.column_task_title}>
                    {currentTask.taskTitle}
                </h3>
                <p className={styles.column_task_subtasks}>
                    {`0 of ${currentTask.subTasks.length} subtasks`}
                </p>
            </div>  
            <Dialog open={open} PaperProps={{ sx: { overflow: 'initial'}, style: {
                            backgroundColor: 'var(--dialog-bg-color)',
                            }}}>
                <DialogTitle sx={{padding: '32px 32px 24px 32px'}}>
                    <div className={styles.dialogTitle}>
                        <h2 className={styles.dialogTitle_title}>
                            {currentTask.taskTitle}                        
                        </h2>     
                        <EditOrDeleteTask handleDelete={handleDelete}/>                   
                    </div>
                </DialogTitle>
                <DialogContent className={styles.dialogContent} sx={{padding: '0px 32px 32px 32px', overflow: 'initial'}}>
                    <p className={styles.dialogContent_desc}>
                        {currentTask.description}
                    </p>
                    <h5 className={styles.dialogContent_subtasksCompleted}>
                        {`Subtasks (${completed} of ${currentTask.subTasks.length})`}
                    </h5>
                    <div className={styles.dialogContent_subtasks}>
                        {currentTask.subTasks.map((subtask, i) => {
                            return(
                              <CheckBox 
                                subtask={subtask} 
                                index={i} 
                                handleCompleted={handleCompleted} 
                                key={i} 
                                ref={allCheckboxes}/>
                            )
                        })}
                    </div>
                    <SelectBox/>
                </DialogContent>
            </Dialog>      
        </>                          

    )
}

export default Tasks;