import React from 'react';
import Table from './Table';
import './style.css';

export default class TableWrapper extends React.Component {
  constructor() {
    super()
    this.state = {
      aktivniSto: -1
    }
    this.postaviAktivni = this.postaviAktivni.bind(this)
  }

  postaviAktivni(brojStola) {
    const aktivniSto = (this.state.aktivniSto == brojStola) ? -1 : brojStola
    this.setState({aktivniSto})
  }

  render() {
    let nizStolova = []
    for (let i=1; i <= this.props.brojStolova; i++) {
      nizStolova.push(
        <Table
          key={i}
          brojStola={i}
          otvoriMeni={this.props.otvoriMeni}
          postaviAktivni={this.postaviAktivni}
          aktivan={this.state.aktivniSto == i}
        />
      )
    }
    return (
      <div className="table-wrapper">
        {nizStolova}
      </div>
    )
  }
}
