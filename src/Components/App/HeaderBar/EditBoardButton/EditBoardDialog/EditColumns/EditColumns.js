import React, {forwardRef, useImperativeHandle, memo, useState} from 'react';
import Column from './Column';
import styles from './styles.module.css';
import {v4 as uuid} from 'uuid';

//i need to find a way to keep the text in the inputs the same after there is a render
const EditColumns = forwardRef(({columns}, ref) => {
    const [allColumns, setAllColumns] = useState(columns);

    const handleColumn = () => {
        const allColumns = document.querySelector('.' + styles.allColumns_columns);
        if(allColumns.childNodes.length >= 5)
            return;

        setAllColumns((prevColumns) => {
            return [...prevColumns, '']
        })
    }

    const updateColumn = (id) => {
        setAllColumns((prevColumns) => {
            return prevColumns.filter((column, index) => {
                if(index == id)
                    return false;
                else 
                    return true
            })
        })
    }

    //this hook will get all the values of all the inputs in this component
    useImperativeHandle(ref, () => ({
        get columns() {
            const allInputs = document.querySelectorAll('.' + styles.inputContainers_input);
            return Array.from(allInputs).map((column) => {
                return column.value;
            })
        }
    }))

    return(
        <section className={styles.allColumns}>
            <h5 className={styles.allColumns_title}>
                {`Board Columns (max: 5)`}
            </h5>
            <div className={styles.allColumns_columns}>
                {allColumns.map((column, i) => {
                    return (
                        <Column defaultValue={column} id={i} updateColumn={updateColumn} key={uuid()}/>
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