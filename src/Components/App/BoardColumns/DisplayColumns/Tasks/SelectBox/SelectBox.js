import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import styles from './styles.module.css';
import icons from './icons';

function SelectBox() {
    const selectedBoard = useSelector(state => state.board);
    const [option, setOption] = useState(selectedBoard.columns[0].columnTitle);

    return(
        <section className={styles.selectBox}>
            <h4 className={styles.selectBox_label}>
                Current Status
            </h4>
            <div className={styles.selectBox_select}>
                {option}
                <img className={styles.arrowDown} src={icons['arrowDown']}/>
            </div>
            <div className={styles.selectBox_popup}>
                {selectedBoard.columns.map((column, i) => {
                    return(
                        <div className={styles.selectBox_option} key={i}>
                            {column.columnTitle}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default SelectBox;