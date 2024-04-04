import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom';
// import { Provider } from 'react-redux';
// import {store} from "./store/index.js"
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { listingsApi } from "./store/features/apiSlice.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider api={listingsApi}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApiProvider>
  </React.StrictMode>,
)