import React from "react";
import ReachDOM from 'react-dom';
import './styles.css';
import App from './App';

ReachDOM.render(
    <React.StrictMode>
        <>
            <App />
        </>
    </React.StrictMode>
    ,
document.getElementById('root'))