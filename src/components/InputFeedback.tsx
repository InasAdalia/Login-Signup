import React from 'react'
import { InputFeedbackProps } from '../props'

const InputFeedback = ({feedback}: InputFeedbackProps) => {
  return (
    <label className="form-footnote text-danger mt-1">{feedback}</label>
  )
}

export default InputFeedback