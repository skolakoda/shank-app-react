import React from 'react';
import Header from './Header';
import TableWrapper from './TableWrapper/TableWrapper';
import DrinkMenu from './DrinkMenu/DrinkMenu';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numOfTables: 6,
      isMenuOpen: false,
      activeTable: -1,
      orders: {}
    }
    this.openMenu = this.openMenu.bind(this)
    this.dodajPice = this.dodajPice.bind(this)
  }

  openMenu(tableNum) {
    const activeTable = (this.state.activeTable == tableNum) ? -1 : tableNum
    this.setState({
      activeTable,
      isMenuOpen: activeTable !== -1
    })
  }

  dodajPice(naziv, cena) {
    const order = this.state.orders[this.state.activeTable] || {}
    order[naziv] = naziv in order ? order[naziv] + 1 : 1
    const orders = this.state.orders
    orders[this.state.activeTable] = order
    this.setState({orders})
  }

  render() {
    return (
      <div>
        <Header/>
        <TableWrapper
          brojStolova={this.state.numOfTables}
          openMenu={this.openMenu}
          activeTable={this.state.activeTable}
          orders={this.state.orders}
        />
        <DrinkMenu
          otvoren={this.state.isMenuOpen}
          dodajPice={this.dodajPice}
        />
      </div>
    )
  }
}
