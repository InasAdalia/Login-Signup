import React, { useState } from 'react'
import '../stylesheets/login.css';
import InputComponent from '../components/InputComponent';
import LoginFeedback from '../components/LoginFeedback';
import { Link } from 'react-router-dom';
import SubmitButton from '../components/SubmitButton';



const Login = () => {
 
  const users = [
    {username: 'inas', password:'123'},
    {username: 'adalia', password: '321'}
  ]

  const [username, setUsername ] = useState<string>('');
  const [password, setPassword ] = useState<string>('');

  const [correctPassword, setPasswordBool] = useState<boolean|null>(null)
  const [correctUsername, setUsernameBool] = useState<boolean|null>(null)

  const [loginFeedback, setFeedback] = useState('')
  const [alertVisible, setAlertVisible] = useState(false)

  const authUser=()=>{
    const userExists = users.find(user => user.username === username);
    const passwordCorrect = userExists && userExists.password === password;

    // Set username and password states
    setUsernameBool(userExists ? true : false);
    setPasswordBool(passwordCorrect ? true : false);

    // Handle feedback directly before setting state
    if (passwordCorrect && userExists) {
      setFeedback('Login successful!');
    } else if (!passwordCorrect && userExists) {
      setFeedback('Incorrect password');
      clearInput();
    } else if (!userExists) {
      setFeedback('Username not found');
      clearInput();
    }

    setAlertVisible(true);
  }

  const clearInput=()=>{
    setUsername('');
    setPassword('');
  }

  const handleFeedback = ()=>{
    if (correctPassword && correctUsername){
      setFeedback('Login successful!')
    } else if (!correctPassword && correctUsername){
      setFeedback('Incorrect password')
      clearInput();
    } else if(!correctUsername){
      setFeedback('Username not found')
      clearInput;
    }
    setAlertVisible(true)
  }
  
  return (
    <div className="login-div d-flex flex-column justify-content-center">

      {/* Login Feedback Alert */}
      {alertVisible && <LoginFeedback feedback={loginFeedback} color={correctPassword?'text-success':'text-danger'} onClose={()=>setAlertVisible(false)} />}

      <div className={`card ${(correctPassword===false || correctUsername===false) && 'border border-danger'} `} >
        <div className="card-body">
          <h4 className="card-title text-start"> Nice to see you again</h4>

          <form onSubmit={e=>{
          e.preventDefault();
          authUser(); }}>

            {/* Email or Username */}
            <div className="text-start mb-3 mt-4">
              <InputComponent placeholder='username' inputValue={username} inputType='text' setInput={setUsername} hasError={correctPassword===false}/>
            </div>

            {/* Password */}
            <div className="text-start mb-3">
              <InputComponent placeholder='password' inputValue={password} inputType='password' setInput={setPassword} hasError={correctPassword===false}/>
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