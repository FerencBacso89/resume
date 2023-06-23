import'./card.css';
import {cardData} from './cardData';

import React from 'react'

function CardList() {
  return (
    <>
    <section className='codeContainer'>
        <h2 className='codeTitle'>Projects & code snipets</h2>
          <section className="cardList">
            {cardData.map((code) => {
              return (
                <Codecard key={code.id} {...code} ></Codecard>
              )//... spread oerator include all property
            })}
          </section>
      </section>
    </>
  )
}
const Codecard=({img, company, skills, category, description, url})=>{
  //click event handler
const clickHandler = () =>{
    window.open(url,'_blank');
};
    return(
        <article className='card'>
            <img src={img} alt=''></img>
            <h4>{company}</h4>
            <h5>Used skills:</h5>
            <h5>{skills}</h5>
            <a className='link' type="button"  onClick={clickHandler}>View on web</a>
        </article>
        
    )

}

export default CardList
