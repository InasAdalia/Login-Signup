import React, { useState } from 'react'
import '../stylesheets/login.css';
import InputComponent from '../components/InputComponent';
import LoginFeedback from '../components/LoginFeedback';
import { Link } from 'react-router-dom';
import SubmitButton from '../components/SubmitButton';
import { userDatabase } from '../UserDatabase';

const handleLogin = (userDatabase: any[]) =>{

  const [username, setUsername ] = useState<string>('');
  const [password, setPassword ] = useState<string>('');
  const [isPasswordCorrect, setPasswordBool] = useState<boolean|null>(null)
  const [isUsernameCorrect, setUsernameBool] = useState<boolean|null>(null)
  const [isAlertVisible, setAlertVisibility] = useState(false)
  const [feedback, setFeedback] = useState('')
  
  const authUser=()=>{
    const userExists = userDatabase.find(user => user.username === username);
    const isPasswordCorrect = userExists && userExists.password === password;

    // Set username and password states
    setUsernameBool(userExists ? true : false);
    setPasswordBool(isPasswordCorrect ? true : false);

    // Handle feedback directly before setting state
    if (userExists && isPasswordCorrect) {
      setFeedback('Login successful!');
    } else if (userExists && !isPasswordCorrect) {
      setFeedback('Incorrect password');
      clearInput();
    } else if (!userExists) {
      setFeedback('Username not found');
      clearInput();
    }

    setAlertVisibility(true);
  }

  const clearInput=()=>{
    setUsername('');
    setPassword('');
  }

  return {
    username,setUsername,
    password,setPassword,
    isPasswordCorrect,
    isUsernameCorrect,
    isAlertVisible, setAlertVisibility,
    feedback,
    authUser
  }
}



const Login = () => {

  const {
    username,setUsername,
    password,setPassword,
    isPasswordCorrect,
    isUsernameCorrect, 
    isAlertVisible, setAlertVisibility,
    feedback,
    authUser,
  } = handleLogin(userDatabase);
 
  return (
    <div className="login-div d-flex flex-column justify-content-center">

      {/* Login Feedback Alert */}
      {isAlertVisible && <LoginFeedback feedback={feedback} color={isPasswordCorrect?'text-success':'text-danger'} onClose={()=>setAlertVisibility(false)} />}

      <div className={`card ${(isPasswordCorrect===false || isUsernameCorrect===false) && 'border border-danger'} `} >
        <div className="card-body">
          <h4 className="card-title text-start"> Nice to see you again</h4>

          <form onSubmit={e=>{
          e.preventDefault();
          authUser(); }}>

            {/* Input Email or Username */}
            <div className="text-start mb-3 mt-4">
              <InputComponent placeholder='username' inputValue={username} inputType='text' setInput={setUsername} hasError={isPasswordCorrect===false}/>
            </div>

            {/* Input Password */}
            <div className="text-start mb-3">
              <InputComponent placeholder='password' inputValue={password} inputType='password' setInput={setPassword} hasError={isPasswordCorrect===false}/>
            </div>

            {/* Remember me & Forgot Password */}
            <div className="d-flex justify-content-between mb-4">

              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label fs-6 text-secondary" htmlFor="flexSwitchCheckDefault">Remember me</label>
              </div>
              
              <p id="emailHelp" className="form-text text-end"><a className="link-opacity-100" href="#">Forgot Password</a></p>
            </div>

            {/* Login Button Set */}
            <SubmitButton buttonAction='Login' isDisabled={username==='' || password===''}/>

          </form>

          <p className="text-center text-secondary mt-3 fs-6">Don't have an account yet? <Link className="link-opacity-100" to="/signup">Create an account</Link></p>

        </div>
      </div>
    </div>
    
  )
}

export default Login