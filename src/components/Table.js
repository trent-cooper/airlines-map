import React from "react"
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

const DataTable = ({
  columns,
  rows,
  format
}) => {
  const classes = useStyles()
  
  const headerCells = columns.map(header => (
    <TableCell key={header.property}>{header.name}</TableCell>
  ))

  const rowCells = rows.map(({ airline, src, dest }) => (
    <TableRow key={`${airline}:${src}:${dest}`}>
      <TableCell key={`airline${airline}`}>{format('airline', airline)}</TableCell>
      <TableCell key={`src${src}`}>{format('src', src)}</TableCell>
      <TableCell key={`dest${dest}`}>{format('dest', dest)}</TableCell>
    </TableRow>
  ))

  return (
  <TableContainer component={Paper}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          {headerCells}
        </TableRow>
      </TableHead>
      <TableBody>
        {rowCells}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default DataTable