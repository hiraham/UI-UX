
import Slide from "./component/Slide";
import React from 'react'
import Header from "./component/Header";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Pick from "./component/Pick";
import Product from "./component/Product";
import Buy from "./component/Buy";
import Post from "./component/Post";

import Card from "./component/Card";

const home = () => {
  return (
    <div>
     
     <Header/>
     <Navbar />
      <Slide />
      <Pick/>
      <Product/>
      <Card/>
      <Buy/>
      <Post/>
      
      <Footer />
    </div>
  )
}

export default home
