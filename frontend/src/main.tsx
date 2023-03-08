import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Routes'

import 'antd/dist/reset.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
