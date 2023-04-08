import React from 'react';
import styles from './styles.module.css';


//create an onBlur handler, onInvalid handler, and onClick handler for the input
//and the error message as well!
function EditColumns() {
    return(
        <section className={styles.allColumns}>
            <h5 className={styles.allColumns_title}>
                Board Columns
            </h5>
            <div className={styles.allColumns_columns}>
                <fieldset className={styles.allColumns_fieldset}>
                    <input type='text' className={styles.allColumns_input}/>
                    <div className={styles.allColumns_closeIcon}></div>
                </fieldset>
            </div>
            <button type='button' className={styles.allColumns_addColumnButton}>
                + Add New Column
            </button>
        </section>
    )
}

export default EditColumns;