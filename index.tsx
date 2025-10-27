import React from 'react';
import ReactDOM from 'react-dom/client';

// Impor file CSS global
import './index.css'; 

// Impor komponen App utama
import App from './App'; 

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Failed to find the root element with id 'root'");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);