import { InputComponentProps } from '../props'


const InputComponent = ({placeholder, inputValue, inputType, setInput, hasError}: InputComponentProps) => {
  return (
    <input type={inputType} 
    className={`form-control ${hasError? 'border border-danger-subtle' : ''}`}
    placeholder={placeholder}
    value={inputValue}  //inputValue is always updated by setInput everytime theres changes detected by onChange
    onChange={e=>setInput(e.target.value)}/>     //actively grabs the input and sets the state's value. now inputValue is updated
  )
}

export default InputComponent