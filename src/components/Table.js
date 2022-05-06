import React from "react"
import { useState } from "react";
import { makeStyles } from '@material-ui/styles';
import { withStyles } from "@material-ui/core/styles";
import { 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableFooter,
  TablePagination
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    width: '90%',
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const DataTable = ({
  columns,
  rows,
  format
}) => {
  const [perPage, setPerPage] = useState(25)
  const [page, setPage] = useState(0)

  const classes = useStyles()
  
  const headerCells = columns.map((header, i) => {
    if (i === 0) return (<TableCell key={header.property}>{header.name}</TableCell>)

    return (<TableCell key={header.property} align="right">{header.name}</TableCell>)
  })

  const lastRow = perPage * page + perPage

  const rowCells = rows.slice(perPage * page, lastRow)
                       .map(({ airline, src, dest }) => (
    <StyledTableRow key={`${airline}:${src}:${dest}`}>
      <TableCell key={`airline${airline}`}>{format('airline', airline)}</TableCell>
      <TableCell key={`src${src}`} align="right">{format('src', src)}</TableCell>
      <TableCell key={`dest${dest}`} align="right">{format('dest', dest)}</TableCell>
    </StyledTableRow>
  ))

  const pageHandler = (e, page) => {
    console.log('here')
    console.log(page)
    setPage(page)
  }

  const perPageHandler = (e) => {
    setPerPage(Number(e.target.value))
    setPage(0)
  }

  return (
  <TableContainer component={Paper}>
    <Table className={classes.table} size="small">
      <TableHead>
        <TableRow>
          {headerCells}
        </TableRow>
      </TableHead>
      <TableBody>
        {rowCells}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TablePagination 
            rowsPerPageOptions={[5, 10, 25]}
            colSpan={3}
            count={rows.length}
            rowsPerPage={perPage}
            page={page}
            SelectProps={{
              inputProps: { 'aria-label': 'rows per page' },
              native: true,
            }}
            onPageChange={pageHandler}
            onRowsPerPageChange={perPageHandler}
            
          />
        </TableRow>
      </TableFooter>
    </Table>
  </TableContainer>
  )
}

export default DataTable