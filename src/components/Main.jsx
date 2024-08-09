import './main.css';
import React from "react";
import Tarif from './Tarif';

function Main() {

  const data = [
    {
      type: "Безлимитный 300",
      price: "300 руб/мес",
      speed: "до 10 Мбит/сек",
      info: "Объем включенного трафика не ограничен",
    },
    {
      type: "Безлимитный 450",
      price: "450 руб/мес",
      speed: "до 50 Мбит/сек",
      info: "Объем включенного трафика не ограничен",
    },
    {
      type: "Безлимитный 550",
      price: "550 руб/мес",
      speed: "до 100 Мбит/сек",
      info: "Объем включенного трафика не ограничен",
    },
    {
      type: "Безлимитный 1000",
      price: "1000 руб/мес",
      speed: "до 200 Мбит/сек",
      info: "Объем включенного трафика не ограничен",
    }
  ];

  return (
    <main className="main">
      {data.map((tarif, index) =>
        <Tarif 
        tarif={tarif}
        isActive={tarif.type === 'Безлимитный 550'}
        />
      )}
    </main>  
  )
}

export default Main