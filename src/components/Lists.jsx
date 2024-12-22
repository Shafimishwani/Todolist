import React from 'react'

const Lists = ({curElem}) => {
  const {img_url,name,rating,description,genre,watch_url} = curElem;
  const btn_style = {
    padding : "1.2rem 2.4rem",
    color :"white",
    backgroundColor: rating > 8.5 ? "rgb(11, 247, 62)" : "yellow",
    border: "none"
  }

  const ratingclass = rating > 8.5 ? "super-hit" : "average";
  return (
    
      <li className='card'>
         <div className='imagebox'>
    <img src={img_url} alt="first.jpg" width="100%" height="100%"/>

  </div>
  <div className='card-content'>
  <h2>Name : {name}</h2>
  <h3>Rating :<span className={`rating ${ratingclass}`}>{rating}</span> </h3>
  <p>Summary : {description}</p>
  <p>Genere: {genre}</p>

  <button style={btn_style}>
    <a href={watch_url}>Watch Now </a>
  </button>
  </div>
      </li>
    
  );
}

export default Lists