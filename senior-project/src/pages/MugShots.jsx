import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Shots.css'

function mugShots() {
    return (
      <div className='Muggi'>
  
          <header id='mugHead'>
              <h1>MugShots</h1>
          </header>
  
          <Navbar />
  
          <section id='mugContent'>

            <h2>omar5o9</h2>
            <img src="src/images/omar.png" alt="omar" />

            <h2>mannypoptart</h2>
            <img src="src/images/manny.png" alt="manny" />

            <h2>cr7</h2>
            <img src="src/images/beto.png" alt="beto" />

            <h2>gibbyMain</h2>
            <img src="src/images/goat.png" alt="goat" />
           
            
          </section>
  
          <footer id='footr'>
              Senior Project 2024 &copy;
          </footer>
      </div>
      
  
    )
  }
  
  export default mugShots