import googleLogo from '../assets/google.png';
import { LoginButtonProps } from '../props';

const LoginButton = ({isDisabled}: LoginButtonProps) => {
  return (
    <>
    <button type="submit" 
    className="btn btn-primary" {...isDisabled && {disabled: true}}>
        Login
    </button>
    
    <div className="divider border-bottom my-4"></div>
    
    {/* Dummy Login with Google */}
    <button type="submit" className="btn btn-dark"> 
            <img className="me-3 icon-small"src={googleLogo} alt="Google"/> 
            Sign in with Google
          </button>
    </>
    
  )
}

export default LoginButton