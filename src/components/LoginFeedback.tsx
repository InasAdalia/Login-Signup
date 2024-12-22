import { FeedbackProps } from '../props'

const LoginFeedback = ({feedback, color='text-danger', onClose}: FeedbackProps) => {
  return (
    <>
      <div className="alert alert-warning alert-dismissible fade show my-3" role="alert">
        {feedback}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
      </div>
    </>
  )
}

export default LoginFeedback