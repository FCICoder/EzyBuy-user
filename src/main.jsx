import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { QueryClient, QueryClientProvider } from 'react-query'

import './i18next'

let queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)
