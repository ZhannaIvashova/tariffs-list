import './main.css';
import React from "react";
import Card from './Card';

function Main() {
  return (
    <main className="main">
      <React.Fragment>
        <Card 
          type="Безлимитный 300"
          price="300 руб/мес"
          speed="до 10 Мбит/сек"
          info="Объем включенного трафика не ограничен"
        />
      </React.Fragment>
    </main>  
  )
}

export default Main