import React from 'react';

const Table = props=> {

const order=props.order
    const narudzbina = []
    for (let pice in order) {
      narudzbina.push(<div key={pice}> {pice}:{order[pice]}</div>)
    }

    return (
      <div className="table" onClick={()=>props.openMenu(props.tableNumber)}>
        <div className="broj-stola">{props.tableNumber}</div>
        <div>{props.isActive && "aktivan"}</div>
        {narudzbina}
      </div>
    )

}
export default Table;
