import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // se importa el componente App.js en el index.js
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // se crea la variable root, que se encarga de renderizar el componente App
root.render(
    <React.StrictMode> {/* Se crea una etiqueta StrictMode para que no se pueda usar JSX en el código */}
        <App />          {/* Se crea el componente App, esto es el componente principal */}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
