
import './introduce.css';
import Headimg from "../../assets/img/HeaderName_job.png";


import React from 'react'

function Introduce() {
  return (
    <>
    <section className="goals">
        <img className='headerimg' src={Headimg} alt='Ferenc Bacsó Front-end Developer'></img>
      <div className='container-fluid introTitle'><h1>Introduce my workflow</h1>
      </div>
      
    </section>
        
    </>
  )
}

export default Introduce