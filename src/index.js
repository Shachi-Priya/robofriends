import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import App from "./containers/App";
import reportWebVitals from './reportWebVitals';
import "tachyons";


ReactDOM.render(
  <React.StrictMode>   
    <App />
    {/* in the place of <App /> in the <React.StrictMode> </React.StrictMode> you can write your code like above done in h1 tag} */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
