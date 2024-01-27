import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
    import "primereact/resources/themes/lara-light-cyan/theme.css"; 
       import '/node_modules/primeflex/primeflex.css'
       import 'primeicons/primeicons.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider>
    <BrowserRouter>
  <App />
  </BrowserRouter>
    </PrimeReactProvider>
  
   
  </React.StrictMode>,
)
