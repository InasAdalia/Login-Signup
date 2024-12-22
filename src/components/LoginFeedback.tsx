import { FeedbackProps } from '../props'

const LoginFeedback = ({feedback, color='text-danger', onClose}: FeedbackProps) => {
  return (
    <>
      <div className="alert alert-danger alert-dismissible fade show my-3" role="alert">
        {feedback}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
      </div>
      {/* <div className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <p>Modal body text goes here.</p>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default LoginFeedback