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
          <h2>Belligol</h2>
        
          <iframe width="560" height="560" src="https://www.youtube.com/embed/s6CnJcdRQkU?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          <p>
          BELLIGOOOOOOOOOOOOOOL
          BELLIGOL
          BELLINGHAM, E ELE 
          O ILUMINADO, DO BELLINGHAM
          </p>
          
          <img src="https://i.kym-cdn.com/photos/images/newsfeed/002/691/290/48e.jpg" alt="belligol" />
        </section>

        <footer id='foot'>
            Senior Project 2024 &copy;
        </footer>
    </div>
    

  )
}

export default belligol