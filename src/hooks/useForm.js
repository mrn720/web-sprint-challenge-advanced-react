// write your custom hook here to control your checkout form
import { useState } from "react"

const useForm = initialValue => {
  const [values, setValues] = useState(initialValue)

  const handleChanges = (newValue) => {
    setValues(newValue)
  }

  return [values, setValues, handleChanges]
}

export default useForm