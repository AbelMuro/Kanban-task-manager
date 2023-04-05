import React, {forwardRef, useImperativeHandle} from 'react';
import styles from './styles.module.css';
import icons from './icons';

const ColumnInputs = forwardRef((props, ref) => {

    const handleDelete = (e) => {
        const columnContainer = e.target.parentElement;
        columnContainer.remove();
    }    

    const handleAddColumn = () => {
        const allColumns = document.querySelector('.' + styles.column_allColumns);
        const newInputContainer = document.createElement('div');
        const newInput = document.createElement('input');
        const newCloseIcon = document.createElement('img');

        newInputContainer.setAttribute('class', styles.input_container);
        newInput.setAttribute('class', styles.input);
        newInput.setAttribute('required', '');
        newInput.setAttribute('type', 'text');
        newCloseIcon.setAttribute('class', styles.input_close);
        newCloseIcon.setAttribute('src', icons['close']);
        newCloseIcon.addEventListener('click', handleDelete);

        newInputContainer.append(newInput);
        newInputContainer.append(newCloseIcon);
        allColumns.append(newInputContainer);
    }
    //this is where i left off, allColumns is not an array at this point
    useImperativeHandle(ref, () => ({
        get state() {
            const allColumns = document.querySelectorAll('.' + styles.input);
            return allColumns.map((columnTitle) => {
                return columnTitle.value;
            })
        }
    }))


    return(             
            <fieldset className={styles.column_container}>
                <h3 className={styles.column_label}>
                    Columns
                </h3>        
                <div className={styles.column_allColumns}>
                    <div className={styles.input_container}>
                        <input type='text' className={styles.input} required/>
                        <img src={icons['close']} className={styles.input_close} onClick={handleDelete}/>
                    </div>
                    <div className={styles.input_container}>
                        <input type='text' className={styles.input} required/>
                        <img src={icons['close']} className={styles.input_close} onClick={handleDelete}/>
                    </div>
                </div>            
                <button type='button' className={styles.column_addButton} onClick={handleAddColumn}>
                    + Add New Column
                </button>
            </fieldset>        
    )
})

export default ColumnInputs;