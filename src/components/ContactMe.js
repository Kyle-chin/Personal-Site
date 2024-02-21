import React from 'react'
import Grid from '@mui/material/Grid';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import './ContactMe.css'

const ContactMe = () => {
  return (
    <div id='contact'>
      <Grid container direction="column" justifyContent="center" alignContent="center" spacing={2} >
        <Grid item xs={12}>
          <div className='contactMe' id='contact'>
            <h1>Contact Me</h1>
          </div>
        </Grid>
      </Grid>
        <Grid container direction="row" alignItems="center" justifyContent="center">
          <Grid item>
            <LinkedInIcon/>
          </Grid>
          <Grid item>
          <a href='https://www.linkedin.com/in/kyle-j-chin/'>https://www.linkedin.com/in/kyle-j-chin/</a>
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" justifyContent="center">
          <Grid item>
            <GitHubIcon/>
          </Grid>
          <Grid item>
          <a href='https://github.com/Kyle-chin'>https://github.com/Kyle-chin</a>
          </Grid>
        </Grid>
        <Grid item>
           
        </Grid>
        <Grid container direction="row" alignItems="center" justifyContent="center">
          <Grid item>
            <EmailIcon/>
          </Grid>
          <Grid item>
          <p>Kyle.chin.re@gmail.com</p>
          </Grid>
        </Grid>
      <br/>
    </div>
  )
}

export default ContactMe