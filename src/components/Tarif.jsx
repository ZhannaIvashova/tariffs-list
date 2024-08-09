import './tarif.css';
import colorType300 from'./colorType300.module.css';
import colorType450 from './colorType450.module.css';
import colorType550 from './colorType550.module.css';
import colorType1000 from './colorType1000.module.css';

function Tarif({ tarif }) {
  
  const styleMap = {
    'Безлимитный 300': colorType300,
    'Безлимитный 450': colorType450,
    'Безлимитный 550': colorType550,
    'Безлимитный 1000': colorType1000
  };

  const colorStyle = styleMap[tarif.type]

  return (
    <div className="card">
      <div className={`card__type ${colorStyle['color-type']}`}>{tarif.type}</div>
      <div className={`card__price ${colorStyle['color-price']}`}>{tarif.price}</div>
      <div className="card__speed">{tarif.speed}</div>
      <div className="card__info">{tarif.info}</div>
    </div>
  )
}

export default Tarif