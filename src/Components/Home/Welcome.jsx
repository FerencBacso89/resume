import React from 'react'
import './welcome.css';
import ProfilImg from "../../assets/img/world_profile.png"
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

function Welcome() {
  return (
    <section className='mindset'>
        <img id="myImg" alt='Profile Picture' src={ProfilImg}></img>
        
          <h2>Welcome to My portfolio site</h2>
          <article id='mindsetText'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ratione nihil dignissimos quia commodi consectetur, cupiditate molestiae eaque quisquam alias ex excepturi dolore, fuga unde vitae voluptates consequatur nemo beatae rerum. Minima labore facere quis animi ad commodi quaerat nisi repudiandae voluptates eaque dolor recusandae optio dolorem odio,
         dicta est, impedit deserunt veniam nesciunt, in rem esse modi iusto! Deleniti sequi, ab quaerat ipsum dolores quod rerum. Nostrum neque, dicta magnam corporis debitis quam accusamus tempora quisquam tempore, facilis eveniet quaerat velit ratione non quia illo esse. Repellendus vitae esse nostrum, amet libero exercitationem provident ea quidem rem eum.
          Alias eaque saepe nihil impedit quam accusantium ullam asperiores, est inventore incidunt et ipsum? A ut, ipsa aliquid molestias explicabo
          voluptate possimus adipisci dolore laudantium qui. Et mollitia tempora quas exercitationem cum eaque labore, voluptatum atque esse.
          Perspiciatis iusto molestias velit reiciendis ipsam? Deleniti error odio, dolor nulla porro, culpa nesciunt placeat fuga dignissimos id eius officia omnis doloremque? Quis ab totam nesciunt repellendus delectus cupiditate eveniet. Voluptatum odit at praesentium eaque quae nobis consequuntur rerum optio facilis ipsam hic harum assumenda, fuga illo voluptates similique quidem dignissimos. Sunt, odio nostrum optio iste officia maiores tempora placeat cupiditate libero similique recusandae!
        </article>
          <section className='iconStack'>
            <p>
              <span><BsGithub/></span>
              <span><BsLinkedin/></span>
            </p>
          </section>
    </section>
  )
}

export default Welcome