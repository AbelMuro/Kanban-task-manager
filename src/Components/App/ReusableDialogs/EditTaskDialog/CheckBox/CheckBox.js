import React, {useState, useEffect, useRef, forwardRef, memo} from 'react';
import styles from './styles.module.css';

const CheckBox = forwardRef(({subtask, handleCompleted, index}, ref) =>  {
    const [checked, setChecked] = useState(subtask.completed);

    const handleChange = () => {
        handleCompleted(!checked);
        setChecked(!checked);
    }

    useEffect(() => {
        const labelText = document.querySelector('.' + styles.inputContainer_label);

        if(checked){
            labelText.style.textDecoration = 'line-through';
            labelText.style.opacity = '0.5';
        }
        else {
            labelText.style.textDecoration = '';
            labelText.style.opacity = '';
        }
    }, [checked])

    return(
        <fieldset className={styles.inputContainer}>
            <input 
                type='checkbox' 
                className={styles.inputContainer_checkBoxes} 
                onChange={handleChange}
                checked={checked}
                ref={refInput => ref.current[index] = refInput}
                data-task={JSON.stringify(subtask)}
                />
            <label className={styles.inputContainer_label}>
                {subtask.subtaskDesc}
            </label>
        </fieldset>
    )
})

export default memo(CheckBox);