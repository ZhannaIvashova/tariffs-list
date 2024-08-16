import './tariff.css';

function Tariff({ tariff, isActive, onClick }) {
  
  return (
    <div className={`card ${isActive ? 'card__active' : ''}`} onClick={onClick}>
      <div className={`card__type ${tariff['color-type']} ${isActive ? 'card__type-active' : ''}`}>{tariff.type}</div>
      <div className={`card__price ${tariff['color-price']}`}>{tariff.price}</div>
      <div className="card__speed">{tariff.speed}</div>
      <div className="card__info">{tariff.info}</div>
    </div>
  )
}

export default Tariff