import React from 'react';
import PropTypes from 'prop-types'

export default class Table extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.openMenu(this.props.tableNumber)
  }

  render() {
    var order = this.props.order
    let narudzbina = []
    for (var pice in order) {
      narudzbina.push(<div key={pice}>{pice}: {order[pice]}</div>)
    }
    return (
      <div className="table" onClick={this.handleClick}>
        <div className="broj-stola">{this.props.tableNumber}</div>
        <div>{this.props.isActive && "aktivan"}</div>
        {narudzbina}
      </div>
    )
  }
}

Table.propTypes = {
  isActive: PropTypes.bool.isRequired,
  tableNumber: PropTypes.number.isRequired,
  openMenu: PropTypes.func.isRequired,
  // order: PropTypes.object.isRequired,
}
