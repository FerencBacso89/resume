import'./card.css';
import birdTour from '../../assets/img/spare/GreatHornedOwl.jpg'


import React from 'react'
const cardData = [
  {       
          id:1, 
          img:birdTour,
          company:'Bird Tour Travel Agency',
          skills:'html, js, bootstrap 5, css'

  },
  {
    id:2,
    img:'./HeaderName_job.png',
    company:'Bird Agency',
    skills:'React, js, Material UI, css'
  },
];


function CardList() {
  return (
    <>
     <h2>My codes</h2>
      <section className="cardList">
        {cardData.map((code) => {
          return (
            <Codecard key={code.id} {...code} ></Codecard>
          )//... spread oerator include all property
          //<Codecard key={cardData.id} card={card}></Codecard>
        })}
      </section>

    </>
  )
}
const Codecard=({img, company, skills})=>{
//  const {img, company, skills} =props;
    return(
        <article className='card'>
            <img src={img} alt=''></img>
            <h4>{company}</h4>
            <h5>{skills}</h5>
            <a href='#'>View on web</a>
        </article>
        
    )

}

export default CardList
