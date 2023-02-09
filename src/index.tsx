import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import {  HashRouter } from 'react-router-dom'
import UserProvider from './context/UserContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter basename='/'>
      <UserProvider>
        <Router />
      </UserProvider>
    </HashRouter>
  </React.StrictMode>

);
