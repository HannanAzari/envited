import React from 'react'
import './landing.css'
import LandingImg from '../assests/Landing.svg'
import { Link } from "react-router-dom";
import { MdCelebration } from 'react-icons/md'

const Landing = () => {
  return (
    <div className='landing'>
      <div className='banner'>
        <img src={LandingImg} alt='Landing' />
      </div>
      <div className='heading'>
        <h1>Imagine if 
          <br />
          <span>Snapchat</span> 
          <br/>
          had events.</h1>
        <p>Easily host and share events with your friends across any social media.</p>
      
        <div className='btn'>
          <Link to='create'><MdCelebration className='md'/>Create my event</Link>
        </div>
      </div>
      
    </div>
  )
}

export default Landing