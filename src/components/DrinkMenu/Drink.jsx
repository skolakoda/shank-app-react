import React from 'react';

const Drink = props => {
  return (
    <p className="drink" onClick={() => props.dodajPice(props.naziv, props.cena)}>
      <img src={props.slika}/>
      <span>{props.naziv} </span>
      <span>{props.cena}</span>
    </p>
  )
}

export default Drink
