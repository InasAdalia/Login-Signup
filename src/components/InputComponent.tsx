import { InputComponentProps } from '../props'


const InputComponent = ({placeholder, inputValue, inputType, setInput, hasError}: InputComponentProps) => {
  return (
    <input type={inputType} 
    className={`form-control ${hasError? 'border border-danger-subtle' : ''}`}
    placeholder={placeholder}
    value={inputValue}
    onChange={e=>setInput(e.target.value)}/>
  )
}

export default InputComponent