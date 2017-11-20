import React from 'react';
import PropTypes from 'prop-types'

const Drink = props => {
  const handleClick = () => {
    props.dodajPice(props.naziv, props.cena)
  }

  return (
    <p className="drink" onClick={handleClick}>
      <img src={props.slika}/>
      <span>{props.naziv} </span>
      <span>{props.cena}</span>
    </p>
  )
}

Drink.propTypes = {
  naziv: PropTypes.string.isRequired,
  cena: PropTypes.number.isRequired,
  slika: PropTypes.string.isRequired,
  dodajPice: PropTypes.func.isRequired
}

export default Drink
