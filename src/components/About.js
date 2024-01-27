import React from 'react'
import Kyle from './images/Kyle_Chin_PFP.jpg'
import './About.css'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className='container'>
            <img src={Kyle} alt='Kyle'/>
            <div className='col-2'>
                <h2>About</h2>
                <span className='line'></span>
                <p>Kyle Chin is a Temple University Graduate with a Bachelor's in Information Systems & Technology from Philadelphia, Pennsylvania. </p>
                <p>He is a self-learning Full Stack Web Developer trying to branch into Game Design, and is always open to learn new topics. </p><br/>
            </div>
        </div>
    </div>
  )
}

export default About