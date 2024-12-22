import React from 'react'
import { InputFeedbackProps } from '../props'

const InputFeedback = ({feedback}: InputFeedbackProps) => {
  return (
    <label className="form-footnote text-secondary mt-1">{feedback}</label>
  )
}

export default InputFeedback