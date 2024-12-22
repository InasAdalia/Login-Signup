export interface LoginButtonProps{
    isDisabled: boolean
}

export interface InputComponentProps{
    placeholder : string
    inputValue: string
    inputType: 'text'| 'password' 
    setInput:  React.Dispatch<React.SetStateAction<string>>
}
 export interface FeedbackProps{
    feedback : string
    color : 'text-success' | 'text-danger'
    onClose: ()=>void
 }