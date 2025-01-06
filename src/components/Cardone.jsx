import seriesData from "../api/seriesData.json"
import Lists from "./Lists";


/*
const genera = () => {
  const gen = "Romcom";

  return gen;
}




*/








  /*
  const name = "Card One "
  const rating = "8.2 "
  const para = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, iusto. "
  let age = 23;
  */

/*
  if(age < 18){
    return (
      <div>
        <img src='Frame 11.png' alt='Image' width="40%" height="40%"/>
        <div/>
        <div>
          <h3>{name}</h3>
          <p>{rating}</p>
          <p>{para}</p>
          <p>Genra ;{genera()}</p>
          <button>Not Available</button>
          </div>
      </div>
    )
  }
    */
  const Cardone = () => {

  

 return(
  <ul className="grid grid-three--cols">
    {seriesData.map((curElem)=>{
      return(
        <Lists key={curElem.id} curElem={curElem} />
      
      )
      
    })}
   
  </ul>
 );
};

export default Cardone;


