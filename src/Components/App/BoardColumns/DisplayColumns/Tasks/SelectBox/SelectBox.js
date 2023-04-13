import React, {useState, useRef, useEffect, forwardRef, useImperativeHandle} from 'react';
import {useSelector} from 'react-redux';
import styles from './styles.module.css';
import icons from './icons';

const SelectBox = forwardRef((props, ref) => {
    const selectedBoard = useSelector(state => state.board);
    const [option, setOption] = useState(selectedBoard.columns[0].columnTitle);
    const [openPopup, setOpenPopup] = useState(false);
    const popup = useRef();
    const arrowRef = useRef();

    const handlePopup = () => {
        setOpenPopup(!openPopup);
    }

    const handleOption = (e) => {
        const optionChoosen = e.target.getAttribute('data-option');
        setOption(optionChoosen);
        setOpenPopup(false);
    }

    useEffect(() => {
        if(openPopup){
            popup.current.style.display = 'flex';
            arrowRef.current.style.transform = 'rotate(180deg)';
        }
            
        else{
            popup.current.style.display = '';
            arrowRef.current.style.transform = '';
        }
            
    }, [openPopup])


    useImperativeHandle(ref, () => ({
        get state() {
            return option;
        }
    }))  


    return(
        <section className={styles.selectBox}>
            <h4 className={styles.selectBox_label}>
                Current Status
            </h4>
            <div className={styles.selectBox_select} onClick={handlePopup}>
                {option}
                <img className={styles.arrowDown} src={icons['arrowDown']} ref={arrowRef}/>
            </div>
            <div className={styles.selectBox_popup} ref={popup}>
                {selectedBoard.columns.map((column, i) => {
                    return(
                        <div className={styles.selectBox_option} key={i} onClick={handleOption} data-option={column.columnTitle}>
                            {column.columnTitle}
                        </div>
                    )
                })}
            </div>
        </section>
    )
})

export default SelectBox;