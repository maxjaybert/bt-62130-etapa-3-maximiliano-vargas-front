import { useState } from "react"

export const useForm = (estadoInicial = {}) => {
  const [values, setValues] = useState(estadoInicial)

  const handleChange = (e) => {
    const { type, name, checked, value } = e.target
    setValues({
      ...values,
      [name]: type === 'checkbox' ? checked : value
    })

  }



  return [values, setValues, handleChange]

}