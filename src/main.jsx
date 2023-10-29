import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalTheme, GlobalLogin, GlobalLanguage } from './contexts';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalTheme>
    <GlobalLanguage>
      <GlobalLogin>
        <App />
      </GlobalLogin>
    </GlobalLanguage>
  </GlobalTheme>
)