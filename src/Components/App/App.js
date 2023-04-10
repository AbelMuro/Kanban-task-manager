import React from 'react';
import HeaderBar from './HeaderBar';
import SideBar from './SideBar';
import BoardColumns from './BoardColumns';
import {Provider} from 'react-redux';
import Store from './Store';
import './styles.css';

function App() {
    return(
        <Provider store={Store}>
            <main>
                <HeaderBar/>
                <SideBar/>    
                <BoardColumns/>
            </main>            
        </Provider>
    )
}

export default App;