import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './store'
import './index.scss';
import App from './App';
import Dashboard from "./routes/dashboard";
import AuthGuard from "./components/AuthGuard/AuthGuard";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <AuthGuard>
              <BrowserRouter>
                  <Routes>
                      <Route path='/' element={<App />} />
                      <Route path='/dashboard' element={<Dashboard />} />
                  </Routes>
              </BrowserRouter>
          </AuthGuard>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

