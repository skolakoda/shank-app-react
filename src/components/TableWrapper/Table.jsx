import React from 'react';

export default class Table extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.postaviAktivni(this.props.brojStola)
    this.props.otvoriMeni(this.props.brojStola)
  }

  render() {
    return (
      <div className="table" onClick={this.handleClick}>
        <div className="broj-stola">{this.props.brojStola}</div>
        <div className="">{this.props.aktivan && "aktivan"}</div>
      </div>
    )
  }
}
