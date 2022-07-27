import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ClockInProvider } from './ClockInContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ClockInProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ClockInProvider>
);


