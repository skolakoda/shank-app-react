import React from 'react';
import Header from './Header';
import TableWrapper from './TableWrapper/TableWrapper';
import DrinkMenu from './DrinkMenu/DrinkMenu';

// klikom na pice
  // dodati pice na aktivni sto

// dodajPice sa App spustati do pica
// stanje preko propsa spustati do stola

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      meniOtvoren: false
    }
    this.openMenu = this.openMenu.bind(this)
  }

  openMenu(tableNumber, isActive) {
    // const radim = isActive ? "Otvaram" : "Zatvaram"
    // console.log(`${radim} narudžbinu za sto broj ${tableNumber}`)
    this.setState({meniOtvoren: !this.state.meniOtvoren})
  }

  dodajPice(naziv, cena) {
    console.log('dodajPice', naziv, cena)
  }

  render() {
    return (
      <div>
        <Header/>
        <TableWrapper brojStolova="7" openMenu={this.openMenu} />
        <DrinkMenu otvoren={this.state.meniOtvoren} dodajPice={this.dodajPice} />
      </div>
    )
  }
}
