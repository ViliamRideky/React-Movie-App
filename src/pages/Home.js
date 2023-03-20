import React from 'react'
import './Home.css'
import image from '../images/firebase.png'


const Home = () => {
  return (
    <div className='home'>
      <h1>Movie database</h1>
      <h3>A simple web application in react where the goal was to practice React router dom and work with Firebase database.</h3>
      <img src={image} alt="Firebase-logo" class="center" width={100} />
    </div>
  )
}

export default Home