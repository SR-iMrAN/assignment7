import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar';
import AuctionApp from './components/Blogs/Blogs';
import Footer from './components/footer/footer';
import { ToastContainer } from "react-toastify";

import Hero from './components/hero/hero';
import "react-toastify/dist/ReactToastify.css";
import Midle from './components/middle/middle';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
<Midle></Midle>
    <AuctionApp></AuctionApp>
    <Footer></Footer>
    <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App
