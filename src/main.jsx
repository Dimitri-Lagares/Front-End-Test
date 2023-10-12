import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalTheme, GlobalLogin, GlobalLanguage } from './contexts';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalTheme>
      <GlobalLogin>
        <GlobalLanguage>
        <App />
      </GlobalLanguage>
    </GlobalLogin>
  </GlobalTheme>
  </React.StrictMode >,
)