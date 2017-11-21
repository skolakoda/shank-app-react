import React from 'react'
import PropTypes from 'prop-types'

const Table = props => {
  var order = this.props.order
  let narudzbina = []
  for (var pice in order) {
    narudzbina.push(<div key={pice}>{pice}: {order[pice]}</div>)
  }
  return (
    <div className="table" onClick={() => props.openMenu(props.tableNumber)}>
      <div className="broj-stola">{this.props.tableNumber}</div>
      <div>{this.props.isActive && "aktivan"}</div>
      {narudzbina}
    </div>
  )
}

Table.propTypes = {
  isActive: PropTypes.bool.isRequired,
  tableNumber: PropTypes.number.isRequired,
  openMenu: PropTypes.func.isRequired,
}

export default Table
