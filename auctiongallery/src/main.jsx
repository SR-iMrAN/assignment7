import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { CiHeart } from "react-icons/ci";
import { BsHeartFill } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
