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
  const age = currDate.getFullYear - theBigday.getFullYear
  return age;
}
const card = (
  <>
    <CardContent>
    <Typography variant="h4" component="div">
    Personel information
    </Typography>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      Nationality: Hun <img className='flag_size' src={Hun} alt="Hungarian" />
      I'm now <span>{age}</span> years old.
    </Typography>
    </CardContent>
</>); 
function Introduce() {
  /*dynamichnadel how many years old */
  const [age, setAge] = React.useState(calcAge());
  return (
    <>
    <section className="goals">
        {/* <img className='headerimg' src={Headimg} alt='Ferenc Bacsó Front-end Developer'></img> */}
      <div className='container-fluid introTitle'><h1>Curriculum Vitae (CV)</h1></div>      
    </section>
    <section className='perdet'>
      <h2 className='pDsubTitle'>Personal Details</h2>
      <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
    
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