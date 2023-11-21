import './App.css';
import { RouterProvider } from 'react-router-dom';
import React from 'react';
import router from './Routes/routes';



function App() { 
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
