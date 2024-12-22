import '../stylesheets/signup.css';
import bgImage from '../assets/bgImage.jpg'
import { Link } from 'react-router-dom'
import InputComponent from '../components/InputComponent';
import { useState } from 'react';
import InputFeedback from '../components/InputFeedback';
import SubmitButton from '../components/SubmitButton';

const Signup = () => {
    const [email, setEmail] = useState<string>('');
    const [username, setUsername ] = useState<string>('');
    const [password, setPassword ] = useState<string>('');

    const [validEmail, setEmailBool] = useState<boolean|null>(null)
    const [validUsername, setUsernameBool] = useState<boolean|null>(null)
    const [validPassword, setPasswordBool] = useState<boolean|null>(null)
    
    return (
    <>
        <div className="d-flex">
            <img src={bgImage} className="bg-image" alt="bg-image"/>
            <div className="signup-div flex-fill mx-5">
                <h4 className="text-start"> Create An Account</h4>

                    <form>

                        {/* Email */}
                        <div className="mb-3 mt-4  text-start">
                            <label className="form-label">Email*</label>
                            <InputComponent placeholder='Email' inputValue={email} inputType='text' setInput={setEmail} hasError={validEmail===false}/>
                            {validEmail && <InputFeedback feedback='Invalid email or email already exists' />}
                        </div>

                        {/* Password */}
                        <div className="text-start mb-3">
                            <label className="form-label">Password*</label>
                            <InputComponent placeholder='Password' inputValue={password} inputType='password' setInput={setPassword} hasError={validPassword===false}/>
                            {validPassword && <InputFeedback feedback='Password does not meet requirements'/>}
                            <label className="form-footnote text-secondary mt-1">Password should be at least 15 characters OR at least 8 characters including a number and a lowercase letter.</label>
                        </div>

                        {/* Username */}
                        <div className="text-start mb-3">
                            <label className="form-label"  htmlFor="inputPassword">Username*</label>
                            <InputComponent placeholder='Username' inputValue={username} inputType='text' setInput={setUsername} hasError={validUsername===false}/>
                            {validUsername && <InputFeedback feedback='Username already exists'/>}
                            <label className="form-footnote text-secondary mt-1">Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen.</label>
                        </div>

                        {/* agree to ToS */}
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label text-secondary">
                                I agree to the <Link className="link-opacity-100" to="/ToS">Terms of Services</Link>
                            </label>
                        </div>

                        {/* Sign up button */}
                        <SubmitButton buttonAction='Sign Up' isDisabled={true}/>
                    </form>

                    <p className="text-center text-secondary mt-3 fs-6">Already have an account? <Link className="link-opacity-100" to="/">Log in</Link></p>
            </div>
        </div>
    </>
  )
}

export default Signup