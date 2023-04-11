import React, {forwardRef, useImperativeHandle, memo, useState} from 'react';
import { useSelector } from 'react-redux';
import Column from './Column';
import styles from './styles.module.css';
import {v4 as uuid} from 'uuid';

//i will need to re-engineer this
const EditColumns = forwardRef(({columns}, ref) => {
    const [allColumns, setAllColumns] = useState(columns); 

    //this function will add a new element to the array(state), which in turn will also add a new <Column/> that corresponds to that element
    const handleColumn = () => {
        const allColumns = document.querySelector('.' + styles.allColumns_columns);
        if(allColumns.childNodes.length >= 5)
            return;

        setAllColumns((prevColumns) => {
            return [...prevColumns, {columnTitle: '', tasks: []}]
        })
    }

    //this function will remove an element of the array(state) that corresponds to one of the <Column/> components
    const deleteColumn = (id) => {
        setAllColumns((prevColumns) => {
            return prevColumns.filter((column, index) => {
                if(index == id)
                    return false;
                else 
                    return true
            })
        })
    }

    //this function will update an element of the array(state) that corresponds to one of the <Column/> components
    const updateColumn = (id, state) => {
        setAllColumns((prevColumns) => {
            return prevColumns.map((column, index) => {
                if(index == id)
                   return {columnTitle: state, tasks: column.tasks};
                else
                    return column;
            })
        })
    }

    useImperativeHandle(ref, () => ({
        get state() {
            return allColumns;
        }
    }))

    return(
        <section className={styles.allColumns}>
            <h5 className={styles.allColumns_title}>
                {`Board Columns (max: 5)`}
            </h5>
            <div className={styles.allColumns_columns}>
                {allColumns.map((column, i) => {
                    //we pass an index of the array(state) to the <Column/>, this will help us identify the component to an element in the array(state)
                    //the plan i have is to figure out how to pass an array of refs dynamically
                    return (
                        <Column updateColumn={updateColumn} deleteColumn={deleteColumn} defaultValue={column.columnTitle} id={i} key={uuid()}/>
                    )
                })}
            </div>
            <button type='button' className={styles.allColumns_addColumnButton} onClick={handleColumn}>
                + Add New Column
            </button>
        </section>
    )
})

export default memo(EditColumns);