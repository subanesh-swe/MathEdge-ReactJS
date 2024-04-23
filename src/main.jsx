import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
//import '../public/stylesheets/index.css'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='app'>
      <App />
    </div>
  </React.StrictMode>,
)
