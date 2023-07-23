import React from 'react'
import './contact.css'
import { GitHub, LinkedIn } from '@mui/icons-material'
import { SiCodesandbox } from 'react-icons/si'

function Contact() {
  return (
    <>
    <h2 className='container-fluid conTitle' >Contact me</h2>
    <section className='contacts col-10 row-cols-2'>
           <div className='cline col'> email: ferenc.bacso89 at gmail.com</div>
           <div className='cline col'>  </div>
           <span className='cline col'> visit my Github : <GitHub></GitHub> </span>
           <span className='cline col'> visit my Sandbox for some snipets : <SiCodesandbox></SiCodesandbox> </span>
           <span className='cline col'> visit my LinkedIn : <LinkedIn></LinkedIn> </span>
           <span className='cline col'> Download my CV :  </span>
    </section>
    </>
  )
}

export default Contact