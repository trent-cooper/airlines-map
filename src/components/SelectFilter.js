import React from "react"
import { NativeSelect, FormControl, InputLabel} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(() => ({
  formControl: {
    marginTop: 10,
    minWidth: 120,
  },
}));

const SelectFilter = ({ allRoutes, airlines, setRoutes, format }) => {

  const classes = useStyles()

  const selectHandler = (e) => {
    if (e.target.value === 'all') {
      return setRoutes(allRoutes)
    }

    const airlineId = +e.target.value
    setRoutes(allRoutes.filter(route => route.airline === airlineId))
  }

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel>Airline</InputLabel>
        <NativeSelect 
          onChange={selectHandler}
        >
          <option value="all">All Airlines</option>
          {airlines.map(airline => (
            <option key={airline} value={airline}>
              {format('airline', airline)}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  )
}

export default SelectFilter