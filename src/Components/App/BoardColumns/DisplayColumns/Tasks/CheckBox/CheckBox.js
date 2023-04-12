import React from 'react';
import styles from './styles.module.css';

function CheckBox({subtask}) {
    return(
        <fieldset className={styles.inputContainer}>
            <input type='checkbox' className={styles.inputContainer_checkBoxes} onClick={handleCheck}/>
            <label className={styles.inputContainer_label} >
                {subtask}
            </label>
        </fieldset>
    )
}

export default CheckBox;