function Card(props){
   return(
      <div className="cardContainer">
        <p className="cardHeader">{props.cardTitle}</p>
        <p className="cardValue"> {props.cardValue}</p>
      </div>

   )
}

export default Card