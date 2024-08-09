import './tarif.css';
import colorTarif300 from'./colorTarif300.module.css';
import colorTarif450 from './colorTarif450.module.css';
import colorTarif550 from './colorTarif550.module.css';
import colorTarif1000 from './colorTarif1000.module.css';

function Tarif({ tarif, isActive }) {
  
  const styleMap = {
    'Безлимитный 300': colorTarif300,
    'Безлимитный 450': colorTarif450,
    'Безлимитный 550': colorTarif550,
    'Безлимитный 1000': colorTarif1000
  };

  const colorStyle = styleMap[tarif.type]

  return (
    <div className={`card ${isActive ? 'card__active' : null}`}>
      <div className={`card__type ${colorStyle['color-type']} ${isActive ? 'card__type-active' : null}`}>{tarif.type}</div>
      <div className={`card__price ${colorStyle['color-price']}`}>{tarif.price}</div>
      <div className="card__speed">{tarif.speed}</div>
      <div className="card__info">{tarif.info}</div>
    </div>
  )
}

export default Tarif