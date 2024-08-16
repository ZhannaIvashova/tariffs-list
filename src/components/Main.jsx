import React from "react";
import { useState } from 'react';

import Tariff from './Tariff';
import TARIFF_TYPES from '../constants';

import './main.css';


function Main() {

  const [isActive, setIsActive] = useState(null)
  const handleCheckState = (id) => setIsActive(id)

  return (
    <main className="main">
      {TARIFF_TYPES.map((tariff, index) =>
        <Tariff
        key={index}
        tariff={tariff}
        onClick={() => handleCheckState(tariff.id)}
        isActive={isActive === tariff.id}
        />
      )}
    </main>  
  )
}

export default Main