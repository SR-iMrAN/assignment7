import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar';
import AuctionApp from './components/Blogs/Blogs';
import { ToastContainer } from "react-toastify";

import Hero from './components/hero/hero';
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <AuctionApp></AuctionApp>
    <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App
