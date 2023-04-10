import React, {useState, useEffect} from 'react';
import styles from './styles.module.css';

function Column({defaultValue, id, updateColumn}) {
    const [close, setClose] = useState(false);


    const handleDelete = (e) => {
        setClose(true);
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

    useEffect(() => {
        if(close){
            updateColumn(id);
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
                        defaultValue={defaultValue ? defaultValue : ''}
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

export default Column;