import React from 'react'
import Kyle from './images/Kyle_Chin_PFP.jpg'
import Grid from '@mui/material/Grid';
import './About.css'

const About = () => {
  return (
    <div id='about'>
      <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} style={{padding: 20}} sx={6}>
        <Grid item>
          <img src={Kyle} alt='Kyle'/>
        </Grid>
        <Grid item justifyContent="center" alignItems="center" textAlign="center" xs={6}>
                  <h2>About</h2>
                  <span className='line'></span>
                  <p>Kyle Chin is a Temple University Graduate with a Bachelor's in Information Systems & Technology.</p>
                  <p>He is a self-learning Full Stack Web Developer trying to branch into Game Design, and is always open to learn new topics.</p><br/>
        </Grid>
      </Grid>
    </div>
  )
}

export default About