import React, { useState } from 'react'
import LoginButton from '../components/LoginButton';
import InputComponent from '../components/InputComponent';
import LoginFeedback from '../components/LoginFeedback';


const Login = () => {

  const users = [
    {username: 'inas', password:'123'},
    {username: 'adalia', password: '321'}
  ]

  const [username, setUsername ] = useState<string>('');
  const [password, setPassword ] = useState<string>('');

  const [correctPassword, setPasswordBool] = useState<boolean|null>(null)
  const [correctUsername, setUsernameBool] = useState<boolean|null>(null)

  const feedbackMsg = ['Login successful', 'Incorrect password', 'Username not found']
  const [loginFeedback, setFeedback] = useState('')
  const [alertVisible, setAlertVisible] = useState(false)

  const authUser=()=>{
    users.find(user=> user.username ===username)? setUsernameBool(true): setUsernameBool(false); //checks username
    users.find(user=> user.username == username && user.password == password) ? setPasswordBool(true): setPasswordBool(false) //checks matching password
    username==='' && setUsernameBool(null)
    password==='' && setPasswordBool(null)
    handleFeedback();
  }

  const clearInput=()=>{
    setUsername('');
    setPassword('');
  }

  const handleFeedback = ()=>{
    if (correctPassword && correctUsername){
      setFeedback('Login successful')
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
    <div className="container d-flex flex-column justify-content-center">
      {alertVisible && <LoginFeedback feedback={loginFeedback} color={correctPassword?'text-success':'text-danger'} onClose={()=>setAlertVisible(false)} />}

      <div className={`${(!correctPassword===false || correctUsername===false) && 'border border-danger'} card mb-3`} >
        <div className="card-body">
          <h3 className="card-title text-start">Nice to see you again</h3>

          <form onSubmit={e=>{
          e.preventDefault();
          authUser(); }}>

            {/* Email or Username */}
            <div className="mb-3 mt-4  text-start">
              <InputComponent placeholder='username' inputValue={username} inputType='text' setInput={setUsername}/>
            </div>

            {/* Password */}
            <div className="text-start mb-3">
              <InputComponent placeholder='password' inputValue={password} inputType='password' setInput={setPassword}/>
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
            <LoginButton isDisabled={username==='' || password===''}/>

            </form>      
        </div>
      </div>
    </div>
    
  )
}

export default Login