import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp'
import { FirstApp } from './FirstApp';
import './styles.css';
// import { HelloWorldApp } from './HelloWorldApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value= {20} />        
        {/* <FirstApp title="Hola, soy Vegetta"/> */}
    </React.StrictMode>
);

