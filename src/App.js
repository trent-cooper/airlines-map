import React from 'react';
import { useState } from 'react';
import './App.css';
import Table from "./components/Table"
import Select from './components/SelectFilter';
import data from "./data"
const { routes: allRoutes, getAirlineById, getAirportByCode } = data
 
const App = () => {
  const [airline, setAirline] = useState("all")
  const [airport, setAirport] = useState("all")

  const formatValue = (prop, val) => {
    if (prop === 'airline') {
      return getAirlineById(val)
    } else {
      return getAirportByCode(val)
    }
  }

  const filtered = allRoutes.filter(route => {
      if (airline === "all") {return route}
      return route.airline === airline
    }).filter(route => {
        if (airport === "all") {return route}
        return route.src === airport || route.dest === airport
      })

  const columns = [
    { name: "Airline", property: "airline" },
    { name: "Source Airport", property: "src" },
    { name: "Destination Airport", property: "dest" },
  ];

  const getUnique = (type) => {
    const unique = []
    allRoutes.forEach(route => {
      if (unique.indexOf(route[type]) === -1) {
        unique.push(route[type])
      }
    })
    return unique
  }

  return (
    <div className="app">
    <header className="header">
      <h1 className="title">Airline Routes</h1>
    </header>
    <section>
      <div>
        <Select 
          options={getUnique('airline')}
          format={formatValue}
          allTitle="All Airlines"
          code="airline"
          setter={setAirline}
        />
        <Select
          options={getUnique('src')}
          format={formatValue}
          allTitle="All Airports"
          code="src"
          setter={setAirport}
        />
      </div>
      <Table columns={columns} rows={filtered} format={formatValue}/>
    </section>
  </div>
  )
}

export default App;