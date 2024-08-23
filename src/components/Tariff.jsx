import './tariff.css';

function Tariff(props) {

  return (
    <div className={`card ${props.isActive ? 'card__active' : ''}`} onClick={props.onClick}>
      <div className={`card__type ${props['color-type']} ${props.isActive ? 'card__type-active' : ''}`}>{props.type}</div>
      <div className={`card__price ${props['color-price']}`}>{props.price}</div>
      <div className="card__speed">{props.speed}</div>
      <div className="card__info">{props.info}</div>
    </div>
  )
}

export default Tariff