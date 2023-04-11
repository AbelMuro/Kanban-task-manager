import React, {useState, useEffect, memo} from 'react';
import styles from './styles.module.css';

function Column({updateColumn, deleteColumn, defaultValue, id}) {
    const [close, setClose] = useState(false);
    const [text, setText] = useState(defaultValue ? defaultValue : '')


    const handleDelete = (e) => {
        setClose(true);
    }

    const handleChange = (e) => {
        setText(e.target.value)
        //updateColumn(id, e.target.value);
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

    //this will remove the component from the array(state) in the parent component
    useEffect(() => {
        if(close){
            deleteColumn(id);
        }
            
    }, [close])

        return close ? <></> : (                        
            <div className={styles.inputContainer}>
                <fieldset className={styles.inputContainer_fieldset} >
                    <input 
                        type='text' 
                        className={styles.inputContainers_input} 
                        onBlur={handleBlur}
                        onInvalid={handleInvalid}
                        onClick={handleClick}
                        value={text}
                        onChange={handleChange}
                        required
                        />
                    <p className={styles.inputContainer_emptyMessage}>
                        Can't be empty
                    </p>                             
                </fieldset>       
                <div className={styles.inputContainer_closeIcon} onClick={handleDelete}></div>
            </div>   
        )
}

export default memo(Column);