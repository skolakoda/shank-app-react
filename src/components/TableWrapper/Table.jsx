import React from 'react';
import {DrinkMenu} from '../DrinkMenu/DrinkMenu';

export class Table extends React.Component {
  constructor() {
    super()
    this.state = {
      aktivan: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(
      {aktivan: !this.state.aktivan},
      () => this.props.otvoriMeni(this.props.brojStola, this.state.aktivan)
    )
  }

  render() {
    return (
      <div className="table" onClick={this.handleClick}>
        <div className="broj-stola">{this.props.brojStola}</div>
        <div className="">{this.state.aktivan && "aktivan"}</div>
      </div>
    )
  }
}
