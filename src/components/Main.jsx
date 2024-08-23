import React from "react";
import { useState } from 'react';

import Tariff from './Tariff';
import TARIFF_TYPES from '../constants';

import './main.css';


function Main() {

  const [activeId, setActiveId] = useState(3)
  const handleCheckState = (id) => setActiveId(id)

  return (
    <main className="main">
      {TARIFF_TYPES.map((tariff, index) =>
        <Tariff
        key={index}
        {...tariff}
        onClick={() => handleCheckState(tariff.id)}
        isActive={activeId === tariff.id}
        />
      )}
    </main>  
  )
}

export default Main