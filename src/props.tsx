export interface LoginButtonProps{
    isDisabled: boolean
    buttonAction: string
}

export interface InputComponentProps{
    placeholder : string
    inputValue: string
    inputType: 'text'| 'password' 
    hasError: boolean
    setInput:  React.Dispatch<React.SetStateAction<string>>
}
 export interface FeedbackProps{
    feedback : string
    color : 'text-success' | 'text-danger'
    onClose: ()=>void
 }

 export interface InputFeedbackProps{
    feedback: string
 }