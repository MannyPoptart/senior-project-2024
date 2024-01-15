import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Belligol.css'


function belligol() {
  return (
    <div className='Belli'>

        <header id='belliHead'>
            <h1>Belligol</h1>
        </header>

        <Navbar />

        <section id='belliContent'>
          <h2>Yo</h2>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </section>

        <footer id='foot'>
            Senior Project 2024 &copy;
        </footer>
    </div>
    

  )
}

export default belligol