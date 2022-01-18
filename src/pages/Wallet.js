import React from 'react';
import Header from '../componentes/Header';
import Form from '../componentes/Form';
import Table from '../componentes/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <Table />
      </div>
    );
  }
}

export default Wallet;
