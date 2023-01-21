import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FeedbackContextProvider } from './context/FeedbackContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FeedbackContextProvider>
      <App />
    </FeedbackContextProvider>
  </React.StrictMode>,
)
