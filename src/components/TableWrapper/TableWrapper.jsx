import React from 'react';
import Table from './Table';
import './style.css';

export default class TableWrapper extends React.Component {
  constructor() {
    super()
    this.state = {
      activeTable: -1
    }
    this.setActiveTable = this.setActiveTable.bind(this)
  }

  setActiveTable(tableNum) {
    const activeTable = (this.state.activeTable == tableNum) ? -1 : tableNum
    this.setState({activeTable})
  }

  render() {
    let tables = []
    for (let i=1; i <= this.props.brojStolova; i++) {
      tables.push(
        <Table
          key={i}
          tableNumber={i}
          openMenu={this.props.openMenu}
          setActiveTable={this.setActiveTable}
          isActive={this.state.activeTable == i}
        />
      )
    }
    return (
      <div className="table-wrapper">
        {tables}
      </div>
    )
  }
}
