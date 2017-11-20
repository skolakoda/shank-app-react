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
    this.otvoriMeni = this.otvoriMeni.bind(this)
  }

  otvoriMeni(brojStola, aktivan) {
    // const radim = aktivan ? "Otvaram" : "Zatvaram"
    // console.log(`${radim} narudžbinu za sto broj ${brojStola}`)
    this.setState({meniOtvoren: !this.state.meniOtvoren})
  }

  dodajPice(naziv, cena) {
    console.log('dodajPice', naziv, cena)
  }

  render() {
    return (
      <div>
        <Header/>
        <TableWrapper brojStolova="7" otvoriMeni={this.otvoriMeni} />
        <DrinkMenu otvoren={this.state.meniOtvoren} dodajPice={this.dodajPice} />
      </div>
    )
  }
}
