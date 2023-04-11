import React from 'react';
import styles from './styles.module.css';
import {v4 as uuid} from 'uuid';

function DisplayColumns({columns}) {

    const handleTask = () => {

    }

    const handleAddColumn = () => {
        
    }

    return(
        <section className={styles.columns}>
            {columns.map((column) => {
                return(
                    <div className={styles.column} key={uuid()}>
                        <div className={styles.column_title}>
                            <div className={styles.dot}></div>
                            {`${column.columnTitle} (${column.tasks.length})`}
                        </div>
                        {column.tasks.length ? column.tasks.map((task) => {
                            return( 
                                <div className={styles.column_task} key={uuid()} onClick={handleTask}>
                                    <h3 className={styles.column_task_title}>
                                        {task.taskTitle}
                                    </h3>
                                    <p className={styles.column_task_subtasks}>
                                        {`0 of ${task.subTasks.length} subtasks`}
                                    </p>
                                </div>) 
                        }) : <div className={styles.message}>
                                No tasks in this column
                            </div>}                
                    </div>
                )
            })}
            <button className={styles.addNewColumnButton} onClick={handleAddColumn}>
                + New Column
            </button>
        </section>
    )
}

export default DisplayColumns;