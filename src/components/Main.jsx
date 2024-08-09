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
      color: "#00BFFF",
    },
    {
      type: "Безлимитный 450",
      price: "450 руб/мес",
      speed: "до 50 Мбит/сек",
      info: "Объем включенного трафика не ограничен",
      colorType: "#48D1CC",
      colorPrice: "#40E0D0",
    },
    {
      type: "Безлимитный 550",
      price: "550 руб/мес",
      speed: "до 100 Мбит/сек",
      info: "Объем включенного трафика не ограничен",
      colorType: "#FF6347",
      colorPrice: "#FF7F50",
    },
    {
      type: "Безлимитный 1000",
      price: "1000 руб/мес",
      speed: "до 200 Мбит/сек",
      info: "Объем включенного трафика не ограничен",
      colorType: "#000000",
      colorPrice: "#474646",
    }
  ];

  return (
    <main className="main">
      {data.map((tarif, index) =>
        <Tarif tarif={tarif} index={index}/>
      )}
    </main>  
  )
}

export default Main