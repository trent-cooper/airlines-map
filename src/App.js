import React from 'react';
import './App.css';
import data from './data'
import { makeStyles } from '@material-ui/styles';
import { 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const { routes, getAirlineById, getAirportByCode } = data

const DataTable = ({ routes }) => {
  const classes = useStyles()

  return (
  <TableContainer component={Paper}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Airline</TableCell>
          <TableCell align="right">Source</TableCell>
          <TableCell align="right">Destination</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {routes.map(route => (
          <TableRow key={route.airline + route.src + route.dest}>
            <TableCell>{getAirlineById(route.airline)}</TableCell>
            <TableCell align="right">{getAirportByCode(route.src)}</TableCell>
            <TableCell align="right">{getAirportByCode(route.dest)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}
 
const App = () => (
  <div className="app">
  <header className="header">
    <h1 className="title">Airline Routes</h1>
  </header>
  <section>
    <p>
      Welcome to the app!
    </p>
    <DataTable routes={routes}/>
  </section>
</div>
)

export default App;