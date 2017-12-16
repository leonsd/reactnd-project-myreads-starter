import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import BooksApp from './App'
import './css/styles.css'

ReactDOM.render(
  <div>
    <BrowserRouter>
      <BooksApp />
    </BrowserRouter>
  </div>,
  document.getElementById('root')
)
