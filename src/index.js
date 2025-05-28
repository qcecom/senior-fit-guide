import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import trực tiếp từ react-router-dom
import App from './App';
import './styles.css';

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
} else {
  console.error("Element with ID 'root' not found. Ensure it is rendered in the DOM.");
}