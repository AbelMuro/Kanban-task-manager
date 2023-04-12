import React, {useState} from 'react';
import Task from './Tasks';
import styles from './styles.module.css';
import AddNewColumn from './AddNewColumn';
import {v4 as uuid} from 'uuid';

function DisplayColumns({columns}) {


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
                                <Task task={task} key={uuid()}/>
                            ) 
                        }) : <div className={styles.message}>
                                No tasks in this column
                            </div> }                
                    </div>
                )
            })}
            <AddNewColumn/>
        </section>
    )
}

export default DisplayColumns;