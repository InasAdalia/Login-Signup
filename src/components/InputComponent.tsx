import { InputComponentProps } from '../props'


const InputComponent = ({placeholder, inputValue, inputType, setInput}: InputComponentProps) => {
  return (
    <input type={inputType} 
    className="form-control bg-light" 
    placeholder={placeholder}
    value={inputValue}
    onChange={e=>setInput(e.target.value)}/>
  )
}

export default InputComponent