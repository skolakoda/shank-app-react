import React from 'react'
import PropTypes from 'prop-types'

const Table = props => {
  return (
    <div className="table" onClick={() => props.openMenu(props.tableNumber)}>
      <div className="broj-stola">{props.tableNumber}</div>
      <div>{props.isActive && "aktivan"}</div>
    </div>
  )
}

Table.propTypes = {
  isActive: PropTypes.bool.isRequired,
  tableNumber: PropTypes.number.isRequired,
  openMenu: PropTypes.func.isRequired,
}

export default Table
