import React, {useState, forwardRef, useImperativeHandle} from 'react';
import styles from './styles.module.css';

const BoardNameInput = forwardRef((props, ref) => {
    const [boardName, setBoardName] = useState('');

    const handleBoardName = (e) => {
        setBoardName(e.target.value);
    }

    useImperativeHandle(ref, () => ({
        get state(){
            return boardName;
        }
    }))

    //this is where i left off
    return (                    
        <fieldset className={styles.input_container}>
            <label className={styles.input_label} htmlFor='boardName'>
                Board Name
            </label>
            <input 
                type='text'
                className={styles.input} 
                placeholder='e.g Web Design'
                value={boardName}
                onChange={handleBoardName}
                id='boardName'
                required/>
        </fieldset>
    )
})

export default BoardNameInput;