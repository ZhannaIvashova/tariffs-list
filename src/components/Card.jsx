import './card.css';

function Card(props) {
  return (
    <div className="card">
      <div className="card__type">{props.type}</div>
      <div className="card__price">{props.price}</div>
      <div className="card__speed">{props.speed}</div>
      <div className="card__info">{props.info}</div>
    </div>
  )
}

export default Card