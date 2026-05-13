import { StrictMode } from 'react';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
