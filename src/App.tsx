import React from 'react';
import './App.css';
import LayoutPage from './Layout/Layout';
import { RouterProvider } from 'react-router-dom';
import router from './Auth/router';

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  );
}

export default App;
