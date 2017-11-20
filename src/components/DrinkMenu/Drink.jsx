import React from 'react';

export default class Drink extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.dodajPice(this.props.naziv, this.props.cena)
  }

  render() {
    return (
      <p className="drink" onClick={this.handleClick}>
        <img src={this.props.slika}/>
        <span>{this.props.naziv} </span>
        <span>{this.props.cena}</span>
      </p>
    )
  }
}
