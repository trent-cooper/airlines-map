import React from 'react';
import { useState } from 'react';
import './App.css';
import Table from "./components/Table"
import SelectFilter from './components/SelectFilter';
import data from "./data"
const { routes: allRoutes, getAirlineById, getAirportByCode } = data
 
const App = () => {
  const [routes, setRoutes] = useState(allRoutes)

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

  const airlines = (() => {
    const unique = []
    allRoutes.forEach(route => {
      if (unique.indexOf(route.airline) === -1) {
        unique.push(route.airline)
      }
    })
    return unique
  })()

  return (
    <div className="app">
    <header className="header">
      <h1 className="title">Airline Routes</h1>
    </header>
    <section>
      <SelectFilter allRoutes={allRoutes} airlines={airlines} setRoutes={setRoutes} format={formatValue}/>
      <Table columns={columns} rows={routes} format={formatValue}/>
    </section>
  </div>
  )
}

export default App;