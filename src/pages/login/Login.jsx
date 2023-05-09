import './login.css'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventableDefault();
  }

  return (
    <div className='auth-form-container'>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input value={user} onChange={(e) => setUser(e.target.value)} type="user" placeholder="User" id="user" name="user"/>
          <label for="password">Password</label>
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
          <button type="submit">Log In</button>
        </form>
        <Link to='/register' className='btn lg'>Don't have an account? Sign up here!</Link>
    </div>
  )
}

export default Login