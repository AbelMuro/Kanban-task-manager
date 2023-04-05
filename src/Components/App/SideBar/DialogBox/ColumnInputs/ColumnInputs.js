import React, {useState} from 'react';
import styles from './styles.module.css';
import icons from './icons';
import {v4 as uuid} from 'uuid'

function ColumnInputs() {
    const [columns, setColumns] = useState([1,1]);      //the elements in the array dont matter, what matters is the quantity of the elements
                                                        //the quantity represents the number of columns that will appear
    const handleColumn = () => {
        setColumns((prevColumns) => {
            return [...prevColumns, 1];
        })
    }

    return(                        
        <fieldset className={styles.column_container}>
            <h3 className={styles.column_label}>
                Columns
            </h3>
            <div>
                {columns.map(() => {
                        return (
                            <div className={styles.input_container} key={uuid()}>
                                <input type='text' className={styles.input} required/>
                                <img src={icons['close']} className={styles.input_close}/>
                            </div>
                        )
                    })
                }
            </div>
            <button className={styles.column_addButton} onClick={handleColumn}>
                + Add New Column
            </button>
        </fieldset>
    )
}

export default ColumnInputs;