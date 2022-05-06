import React from "react"
import { NativeSelect, FormControl} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(() => ({
  formControl: {
    marginTop: 10,
    minWidth: 120,
  },
}));

const Select = ({ allTitle, options, setter, format, code }) => {

  const classes = useStyles()

  const selectHandler = (e) => {
    if (e.target.value === 'all') {
      setter("all")
    } else {
      const id = e.target.value
      if (code === "airline") {
        setter(+id)
      } else {
        setter(id)
      }
    }
  }

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <NativeSelect 
        onChange={selectHandler}
      >
        <option key ="all" value="all">{allTitle}</option>
        {options.map(airline => (
          <option key={airline} value={airline}>
            {format(code, airline)}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  )
}

export default Select