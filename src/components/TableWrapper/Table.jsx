import React from 'react'
import PropTypes from 'prop-types'

const Table = props => {
  const handleClick = e => {
    props.setActiveTable(props.tableNumber)
    props.openMenu(props.tableNumber)
  }

  return (
    <div className="table" onClick={handleClick}>
      <div className="broj-stola">{props.tableNumber}</div>
      <div>{props.isActive && "aktivan"}</div>
    </div>
  )
}

Table.propTypes = {
  isActive: PropTypes.bool.isRequired,
  tableNumber: PropTypes.number.isRequired,
  setActiveTable: PropTypes.func.isRequired,
  openMenu: PropTypes.func.isRequired,
}

export default Table
