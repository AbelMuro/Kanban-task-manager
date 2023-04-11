import React, {forwardRef, useImperativeHandle, memo, useState} from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import {v4 as uuid} from 'uuid';

const EditColumns = forwardRef((props, ref) => {
    const board = useSelector(state => state.board);

    const handleDelete = (e) => {
        const inputContainer = e.target.parentElement;
        inputContainer.removeChild(e.target.previousElementSibling)
        inputContainer.removeChild(e.target);
    }

    const handleClick = (e) => {
        const input = e.target;
        const emptyMessage = e.target.nextElementSibling;

        input.setCustomValidity('');
        input.style.border = '';
        emptyMessage.style.display = '';
    }

    const handleBlur = (e) => {
        const input = e.target;
        const emptyMessage = e.target.nextElementSibling;
        const isValid = input.checkValidity();

        if(isValid){
            input.style.border = '';
            emptyMessage.style.display = '';
        }
        else{
            input.setCustomValidity(' ');
            input.style.border = '1px solid #EA5555'
            emptyMessage.style.display = 'block';
        }
    }   

    const handleInvalid = (e) => {
        const input = e.target;
        const emptyMessage = e.target.nextElementSibling

        input.setCustomValidity(' ');
        input.style.border = '1px solid #EA5555';
        emptyMessage.style.display = 'block';
    }

    //this function will add a new element to the array(state), which in turn will also add a new <Column/> that corresponds to that element
    const handleColumn = () => {
        const allColumns = document.querySelector('.' + styles.allColumns_columns);
        if(allColumns.childNodes.length >= 5)
            return;

            const newInputContainer = document.createElement('div');
            const newFieldset = document.createElement('fieldset');
            const newInput = document.createElement('input');
            const newCloseIcon = document.createElement('div');
            const emptyMessage = document.createElement('div');
    
            newInputContainer.setAttribute('class', styles.inputContainer);
            newFieldset.setAttribute('class', styles.inputContainer_fieldset);
            newInput.setAttribute('class', styles.inputContainers_input);
            newInput.setAttribute('required', '');
            newInput.setAttribute('type', 'text');
            newInput.addEventListener('blur', handleBlur);
            newInput.addEventListener('invalid', handleInvalid);     
            newInput.addEventListener('click', handleClick);
            newCloseIcon.setAttribute('class', styles.inputContainer_closeIcon);
            newCloseIcon.addEventListener('click', handleDelete);
            emptyMessage.setAttribute('class', styles.inputContainer_emptyMessage);
            emptyMessage.innerHTML = "Can't be empty";
    
            newFieldset.append(newInput);
            newFieldset.append(emptyMessage);
            newInputContainer.append(newFieldset);
            newInputContainer.append(newCloseIcon);
            allColumns.append(newInputContainer);
    }

    useImperativeHandle(ref, () => ({
        get state() {
            const allInputs = document.querySelectorAll('.' + styles.inputContainers_input);

            return Array.from(allInputs).map((input) => {
                const tasks = input.getAttribute('data-tasks');
                return {columnTitle: input.value, tasks: tasks ? tasks : []}
            });
        }
    }))

    return(
        <section className={styles.allColumns}>
            <h5 className={styles.allColumns_title}>
                {`Board Columns (max: 5)`}
            </h5>
            <div className={styles.allColumns_columns}>
                {board.columns.map((column, i) => {
                    return (
                        <div className={styles.inputContainer} key={uuid()}>
                            <fieldset className={styles.inputContainer_fieldset} >
                                <input 
                                    type='text' 
                                    className={styles.inputContainers_input} 
                                    onBlur={handleBlur}
                                    onInvalid={handleInvalid}
                                    onClick={handleClick}
                                    defaultValue={column.columnTitle}
                                    data-tasks={column.tasks}
                                    required
                                    />
                                <p className={styles.inputContainer_emptyMessage}>
                                    Can't be empty
                                </p>                             
                            </fieldset>       
                            <div className={styles.inputContainer_closeIcon} onClick={handleDelete}></div>
                        </div>  
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