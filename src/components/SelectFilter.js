import React from "react"
import { NativeSelect, FormControl} from "@material-ui/core"

const Select = ({ allTitle, options, setter, state, format, code }) => {

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
    <FormControl variant="outlined" >
      <NativeSelect 
        onChange={selectHandler}
        value={state}
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