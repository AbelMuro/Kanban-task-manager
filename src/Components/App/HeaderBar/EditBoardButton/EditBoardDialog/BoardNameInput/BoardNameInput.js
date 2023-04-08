import React, {useState, useRef} from 'react';
import styles from './styles.module.css';

function BoardNameInput() {
    const [text, setText] = useState('');
    const input = useRef();
    const emptyMessage = useRef();

    const handleChange = (e) => {
        setText(e.target.value);
        input.current.setCustomValidity('');
        input.current.style.border = '';
        emptyMessage.current.style.display = '' ;
    }

    const handleBlur = () => {
        const isValid = input.current.checkValidity('');

        if(isValid){
            input.current.setCustomValidity('');
            input.current.style.border = '';
            emptyMessage.current.style.display = '' ;
        }
        else{
            input.current.setCustomValidity(' ');
            input.current.style.border = '1px solid #EA5555';
            emptyMessage.current.style.display = 'block' 
        }
    }

    const handleInvalid = () => {
        input.current.setCustomValidity(' ');
        input.current.style.border = '1px solid #EA5555';
        emptyMessage.current.style.display = 'block' 
    }

    return(                        
        <fieldset className={styles.inputContainer}>
            <label className={styles.inputContainer_label}>
                Board Name
            </label>   
            <input 
                type='text' 
                className={styles.inputContainer_input}
                value={text}
                onChange={handleChange}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                ref={input}
                required
                />      
            <div className={styles.emptyMessage} ref={emptyMessage}>
                Can't be empty
            </div>                   
        </fieldset>
    )
}

export default BoardNameInput;