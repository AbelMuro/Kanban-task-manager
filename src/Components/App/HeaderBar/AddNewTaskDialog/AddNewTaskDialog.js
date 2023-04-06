import React from 'react';
import styles from './styles.module.css';


//need to create the dialog for adding a new task to a column
function AddNewTaskDialog() {
    return(                
        <button className={styles.header_addNewTask_button} >
            + Add New Task
        </button> 
    )
}

export default AddNewTaskDialog;