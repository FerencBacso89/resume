import React from 'react'
import './welcome.css';
import ProfilImg from "../../assets/img/world_profile.png"
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

function Welcome() {
  return (
    <section className='mindset'>
        <img id="myImg" alt='Profile Picture' src={ProfilImg}></img>
        <article id='mindsetText'>
          <h2>Welcome My portfolio site</h2>
          <section className='iconStack'>
            <p><BsGithub/></p>
            <p><BsLinkedin/></p>
          </section>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus eos numquam magni minima aperiam aspernatur nostrum. Fugiat, tenetur beatae. Culpa unde tempora eos mollitia eum placeat, enim adipisci quae voluptas odit ad voluptates repellendus
             perspiciatis ducimus voluptate porro iure cum reprehenderit doloremque quo nihil sint odio? A, porro! Quae!
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem nemo incidunt neque porro accusantium pariatur nostrum, ipsum voluptates dicta aut atque vel, sapiente distinctio commodi eos necessitatibus voluptatum maxime facere.
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, harum temporibus! Ullam ex molestias maxime. 
             Sequi dolorum quos autem placeat aspernatur alias repudiandae molestias nulla, commodi, accusamus in dignissimos ab magnam rem deserunt odio veritatis repellendus, voluptates inventore. Dolores accusantium dolor ipsa illo dicta tempore earum placeat cum minus, ipsam ad, libero eveniet tempora iusto dolore maiores sunt tenetur numquam recusandae? Molestias assumenda quae magni itaque recusandae fuga vitae dolor perspiciatis hic rem! Laboriosam delectus quisquam repudiandae ut ducimus cum quasi dolorum fugiat, enim ipsam corporis recusandae sed optio dolore,
              veniam voluptatibus. Ducimus reiciendis, similique eum maiores tenetur eligendi quae?
              amet consectetur adipisicing elit. Rem nemo incidunt neque porro accusantium pariatur nostrum, ipsum voluptates dicta aut atque vel, sapiente distinctio commodi eos necessitatibus voluptatum maxime facere.
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, harum temporibus! Ullam ex molestias maxime. 
             Sequi dolorum quos autem placeat aspernatur alias repudiandae molestias nulla, commodi, accusamus in dignissimos ab magnam rem deserunt odio veritatis repellendus, voluptates inventore. Dolores accusantium dolor ipsa illo dicta tempore earum placeat cum minus, ipsam ad, libero eveniet tempora iusto dolore maiores sunt tenetur numquam recusandae? Molestias assumenda quae magni itaque recusandae fuga vitae dolor perspiciatis hic rem! Laboriosam delectus quisquam repudiandae ut ducimus cum quasi dolorum fugiat, enim ipsam corporis recusandae sed optio dolore,
              veniam voluptatibus. Ducimus reiciendis, similique eum maiores tenetur eligendi quae?
        </article>
    </section>
  )
}

export default Welcome