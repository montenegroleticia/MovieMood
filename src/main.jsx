import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import ResetStyle from './Styles/ResetStyle.jsx';
import GlobalStyle from './Styles/GlobalStyle.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
