import {useEffect, useState} from 'react';

function useLocalStorage(key) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        window.addEventListener('storage',() => {

        })
        return () => {
            window.removeEventListener('storage', () => {
                
            })
        }

    })

    useEffect(() => {
        const allItems = localStorage.getItem(key);
        if(allItems) 
            setItems(allItems);
    });

    return items;
}

export default useLocalStorage;