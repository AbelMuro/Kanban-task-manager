import React, {forwardRef, useImperativeHandle} from 'react';
import styles from './styles.module.css';
import icons from './icons';

const ColumnInputs = forwardRef((props, ref) => {

    const handleDelete = (e) => {
        const columnContainer = e.target.parentElement;
        columnContainer.remove();
    }    

    const handleChange = (e) => {
        e.target.setCustomValidity('');
        const emptyMessage = e.target.nextElementSibling;
        const input = e.target;
        emptyMessage.style.display = '';
        input.style.border = '';
    }

    const handleBlur = (e) => {
        const isValid = e.target.checkValidity();
        const emptyMessage = e.target.nextElementSibling;
        const input = e.target;
        if(isValid){
            emptyMessage.style.display = '';
            input.style.border = ''
        }
        else {
            emptyMessage.style.display = 'block';
            input.style.border = '1px solid #EA5555';
        }
    }   

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        const emptyMessage = e.target.nextElementSibling;
        const input = e.target;
        emptyMessage.style.display = 'block';
        input.style.border = '1px solid #EA5555';
    }

    const handleAddColumn = () => {
        const allColumns = document.querySelector('.' + styles.column_allColumns);
        const newInputContainer = document.createElement('div');
        const newInput = document.createElement('input');
        const newCloseIcon = document.createElement('img');
        const emptyMessage = document.createElement('div');

        newInputContainer.setAttribute('class', styles.input_container);
        newInput.setAttribute('class', styles.input);
        newInput.setAttribute('required', '');
        newInput.setAttribute('type', 'text');
        newInput.addEventListener('blur', handleBlur);
        newInput.addEventListener('invalid', handleInvalid);     
        newInput.addEventListener('change', handleChange);
        newCloseIcon.setAttribute('class', styles.input_close);
        newCloseIcon.setAttribute('src', icons['close']);
        newCloseIcon.addEventListener('click', handleDelete);
        emptyMessage.setAttribute('class', styles.emptyMessage);
        emptyMessage.innerHTML = "Can't be empty";

        newInputContainer.append(newInput);
        newInputContainer.append(emptyMessage);
        newInputContainer.append(newCloseIcon);
        allColumns.append(newInputContainer);
    }

    useImperativeHandle(ref, () => ({
        get state() {
            const allColumns = document.querySelectorAll('.' + styles.input);
            return Array.from(allColumns).map((columnTitle) => {
                return columnTitle.value;
            })
        }
    }))


    return(             
            <fieldset className={styles.column_container}>
                <h3 className={styles.column_label}>
                    {'Columns (min 2)'}
                </h3>        
                <div className={styles.column_allColumns}>
                    <div className={styles.input_container}>
                        <input 
                            type='text' 
                            className={styles.input} 
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            onInvalid={handleInvalid}
                            required/>
                        <div className={styles.emptyMessage}>
                            Can't be empty
                        </div>
                    </div>
                    <div className={styles.input_container}>
                        <input 
                            type='text' 
                            className={styles.input} 
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            onInvalid={handleInvalid}
                            required/>
                        <div className={styles.emptyMessage}>
                            Can't be empty
                        </div>
                    </div>
                </div>            
                <button type='button' className={styles.column_addButton} onClick={handleAddColumn}>
                    + Add New Column
                </button>
            </fieldset>        
    )
})

export default ColumnInputs;