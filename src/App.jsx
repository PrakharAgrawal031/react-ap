import { useState } from 'react'
import './App.css'
import { Navbar, CTA, Brand } from './Components'

import{Blog, Footer, Header, WhatGPT3, Possibility, Features} from './Containers'

function App() {


  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
