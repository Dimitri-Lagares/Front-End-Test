import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StrictMode } from 'react';
import { GlobalTheme, GlobalLogin, GlobalLanguage } from './contexts';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalTheme>
      <GlobalLanguage>
        <GlobalLogin>
          <App />
        </GlobalLogin>
      </GlobalLanguage>
    </GlobalTheme>
  </StrictMode>
)