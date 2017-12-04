import React from 'react';
import TableWrapper from './TableWrapper/TableWrapper';
import {Element} from 'react-stylesheet'



export default class Header extends React.Component {
   render() {
    return (
     <div>
        <h1>Shank App</h1>
        <span>Aktivan sto je {this.props.aktivanSto}</span>
        <br/>
        <br/>
      </div>
    );
  }

}
