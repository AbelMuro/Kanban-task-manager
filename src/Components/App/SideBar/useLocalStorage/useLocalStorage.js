import {useEffect, useState} from 'react';


//remember! you must dispatch the StorageEvent everytime you update the local storage!!
function useLocalStorage(key) {
    const [items, setItems] = useState([]);


//this useEffect will detect changes from the local storage
    useEffect(() => {
        const storageHandler = () => {
            const allItems = localStorage.getItem(key);
            if(allItems) 
                setItems(allItems);
        }

        document.addEventListener('StorageEvent', storageHandler);

        return () => {
            document.removeEventListener('StorageEvent', storageHandler);
        }
    }, [])


    return items;
}

export default useLocalStorage;