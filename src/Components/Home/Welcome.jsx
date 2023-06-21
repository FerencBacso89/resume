import React from 'react'
import './welcome.css';
import ProfilImg from "../../assets/img/world_profile.png"
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

function Welcome() {
  return (
    <div className='mindset'>
        <img id="myImg" alt='Profile Picture' src={ProfilImg}></img>
        <div>
            <h2>Welcome to My portfolio site</h2>
            <article id='mindsetText'>
            My name is Ferenc Bacsó, and I have been working as a frontend developer since 2020. I am thrilled to share my work and passion for web development with you.
              Currently, I am employed at the National Directorate General for Disaster Management, where I am dedicatedly involved in various IT projects. In 2022, I was recognized for my outstanding contributions in the field, an achievement that I am truly proud of.
              However, my life is not solely focused on coding and technology. I have a deep love for birds and birdwatching, which brings me tranquility and inspiration. Hence, I decided to incorporate a flying goose logo, symbolizing my constant pursuit of growth and improvement.
              On this website, I showcase my projects and work that I have been involved in over the years. I proudly present my latest frontend development accomplishments and endeavors, as well as the creative solutions I have found for unique challenges.
              I am more than happy to answer any questions or explore potential collaboration opportunities you may have. Thank you for visiting, and I hope you find the inspiration and interest that I aimed to convey on my website.
            </article>
          </div>
          <div className='greeting'>
              <h5>Best regards,</h5>
              <h5 className='signature'>Ferenc Bacsó</h5>
          </div>
          {/* <section className='iconStack'>
            <p>
              <span><BsGithub/></span>
              <span><BsLinkedin/></span>
            </p>
          </section> */}
    </div>
  )
}

export default Welcome