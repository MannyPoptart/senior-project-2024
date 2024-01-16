import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Home.css'

function Home() {
  return (
    <div className='Home'>

        <header id='homeHeader'>
            <h1>Senior Project</h1>
        </header>

        <Navbar />

        <section id='homeContent'>

            <p>Welcome to the Senior Project website!</p>

            <video src="src/media/monkey.mp4" controls width="300" height="560" ></video>

        </section>

        <footer id='footer'>
            Senior Project 2024 &copy;
        </footer>

    </div>
  )
}

export default Home