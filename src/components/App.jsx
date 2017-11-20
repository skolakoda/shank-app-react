import React from 'react';
import Header from './Header';
import TableWrapper from './TableWrapper/TableWrapper';
import DrinkMenu from './DrinkMenu/DrinkMenu';

// klikom na pice dodati pice na aktivni sto
  // stanje narudzbine preko propsa spustati do stola

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isMenuOpen: false,
      activeTable: -1
    }
    this.openMenu = this.openMenu.bind(this)
  }

  openMenu(tableNum) {
    const activeTable = (this.state.activeTable == tableNum) ? -1 : tableNum
    this.setState({
      activeTable,
      isMenuOpen: activeTable !== -1
    })
  }

  dodajPice(naziv, cena) {
    console.log('dodajPice', naziv, cena)
  }

  render() {
    return (
      <div>
        <Header/>
        <TableWrapper brojStolova="7" openMenu={this.openMenu} activeTable={this.state.activeTable} />
        <DrinkMenu otvoren={this.state.isMenuOpen} dodajPice={this.dodajPice} />
      </div>
    )
  }
}
