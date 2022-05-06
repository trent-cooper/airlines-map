import React from "react"
import { NativeSelect, FormControl} from "@material-ui/core"

const Select = ({ allTitle, options, selected, setter, state, format, code }) => {

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

  const parseOptions = () => {
    return options.map(optn => {
      const disabled = !selected.includes(optn)
      return (
        <option key={optn} value={optn} disabled={disabled}>
          {format(code, optn)}
        </option>
      )
    })
  }

  return (
    <FormControl variant="outlined" >
      <NativeSelect 
        onChange={selectHandler}
        value={state}
      >
        <option key ="all" value="all">{allTitle}</option>
        {parseOptions()}
      </NativeSelect>
    </FormControl>
  )
}

export default Select