import React from 'react';
import './App.css';
import Table from "./components/Table"
import data from "./data"
const { routes, getAirlineById, getAirportByCode } = data
 
const App = () => {
  const formatValue = (prop, val) => {
    if (prop === 'airline') {
      return getAirlineById(val)
    } else {
      return getAirportByCode(val)
    }
  }

  const columns = [
    { name: "Airline", property: "airline" },
    { name: "Source Airport", property: "src" },
    { name: "Destination Airport", property: "dest" },
  ];

  return (
    <div className="app">
    <header className="header">
      <h1 className="title">Airline Routes</h1>
    </header>
    <section>
      <Table columns={columns} rows={routes} format={formatValue}/>
    </section>
  </div>
  )
}

export default App;