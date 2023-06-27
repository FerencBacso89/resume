
// import * as React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import ImageIcon from '@mui/icons-material/Image';
// import WorkIcon from '@mui/icons-material/Work';
// import BeachAccessIcon from '@mui/icons-material/BeachAccess';

import './introduce.css';
import Headimg from "../../assets/img/HeaderName_job.png";



import React from 'react'

function Introduce() {
  return (
    <>
    <section className="goals">
        {/* <img className='headerimg' src={Headimg} alt='Ferenc Bacsó Front-end Developer'></img> */}
      <div className='container-fluid introTitle'><h1>Curriculum Vitae (CV)</h1></div>      
    </section>
    <section className='perdet'>
      <h2 className='pDsubTitle'>Personal Details</h2>
      <div>
      {/* <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List> */}
      </div>
    </section>
        
    </>
  )
}

export default Introduce