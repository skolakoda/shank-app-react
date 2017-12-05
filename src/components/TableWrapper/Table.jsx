import React from 'react';
import pica from '../../../podaci/pica.json';

const Table = props=> {

let total = 0

const order=props.order
    const narudzbina = []
    for (let pice in order) {
      pica.map(function(d, i){
        if(pice == d.naziv){
          total += d.cena * order[pice]
        }
      })
      narudzbina.push(<div key={pice}> {pice}:{order[pice]}</div>)
    }

    return (
      <div className="table" onClick={()=>props.openMenu(props.tableNumber)}>
        <div className="broj-stola">{props.tableNumber}</div>
        <div>{props.isActive && "aktivan"}</div>
        {narudzbina}
        {'Racun je: ' + total}
      </div>
    )

}
export default Table;
