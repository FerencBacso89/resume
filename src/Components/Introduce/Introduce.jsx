import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './introduce.css';
import Headimg from "../../assets/img/HeaderName_job.png";
import Hun from "../../assets/img/hu.svg"


const calcAge=() =>{
  const theBigday= new Date('1989-04-02');
  const currDate= new Date();
  const age = currDate.getFullYear - theBigday.getFullYear;
  return age;
}
function Introduce() {
  /*dynamichnadel how many years old */
  const [age, setAge] = React.useState(calcAge());
  return (
    <>
    <section className="goals">       
      <div className='container-fluid introTitle'><h1>Curriculum Vitae (CV)</h1></div>      
    </section>
    <section className='infoCards container-fluid row'>
            <div class="card-deck row">
              <div class="card-info">              
                <div class="card-body">
                  <h2 class="card-title">General information</h2>
                 <section className='info'>
                        <div className='general'>
                              <p>My Name is <b>Ferenc Bacso</b></p>
                              <span className='row'>Nationality: Hungary <img src={Hun}  alt='Hungarian National flag'></img></span>
                        </div>
                 </section>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
              <div class="card-info">                
                <div class="card-body">
                  <h2 class="card-title">Card title</h2>
                  <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
              <div class="card-info">               
                <div class="card-body">
                  <h2 class="card-title">Card title</h2>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
        </div>
    </section>
   
        
    </>
  )
}

export default Introduce
/* MUI CARD
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
*/