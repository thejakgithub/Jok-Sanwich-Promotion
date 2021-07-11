import './App.css';
import Header from './components/Header';
import data_customers from './data/customers';
import React, { useState } from 'react'
import CustomerList from './components/CustomerList';

function App() {

  const [customers, setCustomers] = useState(data_customers);

  function onAdd(id) {
    const theCus = customers.find((theCus) => theCus.id === id);

    if (!!theCus && theCus.count < 9) {
      theCus.count++;
    } else {
      theCus.count = 0;
      theCus.free++;
    }
    setCustomers([...customers]);
  }

  function onDelete(id) {
    const theCus = customers.find((theCus) => theCus.id === id);

    if (!!theCus && theCus.count > 0) {
      theCus.count--;
      setCustomers([...customers]);
    }
  }

  function onFree(id) {
    const theCus = customers.find((theCus) => theCus.id === id);

    if (!!theCus && theCus.free > 0) {
      theCus.free--;
      setCustomers([...customers]);
    }
  }

  function onClear(id) {
    const theCus = customers.find((theCus) => theCus.id === id);

    if (!!theCus) {
      theCus.count = 0;
      theCus.free = 0;
      setCustomers([...customers]);
    }
  }

  const CustomerListElements = (
    customers.map((theCus) =>
      <CustomerList key={theCus.id} theCus={theCus}
        onAdd={onAdd} onDelete={onDelete}
        onFree={onFree} onClear={onClear}
      />
    )
  );

  return (
    <div className="App">
      <Header />
      <div className="container">
        <h4 className="text-danger">โปรโมชั่นซื้อ 10 แถม 1</h4>
        <hr className="border border-primary" />
        {CustomerListElements}
      </div>
    </div>
  );
}

export default App;
