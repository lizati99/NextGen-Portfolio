import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/audiowide';
import "@fontsource/exo-2"; 
import "@fontsource/exo-2/200.css";
import "@fontsource/exo-2/600.css";
import "@fontsource/exo-2/800.css";
import './index.css';
import { ThemeProvider } from './Context/ThemeContext';
import { LanguageProvider } from './Context/LanguageContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
