import React from 'react'
import './contact.css'
import { GitHub, LinkedIn } from '@mui/icons-material'
import { SiCodesandbox } from 'react-icons/si'

function Contact() {
  return (
    <>
    <h2 className='container-fluid conTitle' >Contact me</h2>
    <section className='contacts col-10'>
           <span className='row'> email: </span>
           <span className='row'> visit my Github : <GitHub></GitHub> </span>
           <span className='row'> visit my Sandbox for some snipets : <SiCodesandbox></SiCodesandbox> </span>
           <span className='row'> visit my LinkedIn : <LinkedIn></LinkedIn> </span>
           <span className='row'> Download my CV :  </span>
    </section>
    </>
  )
}

export default Contact