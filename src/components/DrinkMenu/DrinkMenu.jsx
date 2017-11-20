import React from 'react';
import {Drink} from './Drink.jsx'
import pica from '../../../podaci/pica.json'
import './style.css';

export class DrinkMenu extends React.Component {

  render() {
    const pripremljenaPica = pica.map((pice, i) =>
      <Drink key={i} naziv={pice.naziv} cena={pice.cena} slika={pice.slika}/>
    )

    return (
      <div className={`drink-menu ${!this.props.otvoren && 'hide'}`}>
        {pripremljenaPica}
      </div>
    )
  }
}
