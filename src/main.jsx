import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from "react-redux" 
import {configureStore} from "@reduxjs/toolkit"
import rootReducer from './reducer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const store = configureStore({reducer : rootReducer})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
)
