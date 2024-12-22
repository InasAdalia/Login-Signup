import { FeedbackProps } from '../props'

const LoginFeedback = ({feedback, color='text-danger', onClose}: FeedbackProps) => {
  return (
    <>
      <div className="alert alert-warning alert-dismissible fade show my-3" role="alert">
        {feedback}
       
      </div>
    </>
  )
}

export default LoginFeedback