export const SeriesCard = (props) => {

  const but_style={
    padding:"1.2rem  2.4rem",
    border:"none",
    fontSize:"1.6rem",
    backgroundColor:`${ props.curElem.rating >=  8.5 ? "#7dcea0":"#f7dc6f"}`,
    color:"#070101",
    fontWeight:"bold",
    cursour:"pointer",
    
  };


  const ratingClass = props.curElem.rating >=  8.5 ? "super_hit":"average";

  return (
    <li key={props.curElem.id} className="card">
      <div>
        <img src={props.curElem.img_url} alt="qot.jpg" width="40%" height="40%" />
      </div>
      <div className="card-content">
        <h2>Name : {props.curElem.name} </h2>
        <h3>Rating :    
           <span className= {`rating ${ratingClass}`} >
               {props.curElem.rating} 
            </span> 
       </h3>
        <p>summary : {props.curElem.description}</p>
        <p>Genre : {props.curElem.genre}</p>
        <p>Cast : {props.curElem.cast}</p>
        <a href={props.curElem.watch_url} target="_blank">
          <button style={but_style}>Watch Now</button>
        </a>
      </div>
    </li>
  );
};