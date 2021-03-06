import React from 'react';
import Table from './Table';
import './style.css';

export default class TableWrapper extends React.Component {

  render() {
    let tables = []
    for (let i=1; i <= this.props.brojStolova; i++) {
      tables.push(
        <Table
          key={i}
          tableNumber={i}
          openMenu={this.props.openMenu}
          isActive={this.props.activeTable == i}
          order={this.props.orders[i]}
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
