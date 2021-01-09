import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./store/reduxStore";
import ReactDOM from "react-dom";
import App from "./App";

let state = store.getState();

let rerenderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App dispatch={store.dispatch.bind(store)} state={state}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.subscribe(() => {
    let state = store.getState();
    rerenderTree(state);
});

rerenderTree(state);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
