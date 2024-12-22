import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
//import { Practise } from './practise';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    {/*<Practise />*/}
    <App />
    
  </StrictMode>,
)
