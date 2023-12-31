import './Login.css'
import { useState } from 'react'
import { database } from '../Firebase'
import logo from '.././Images/logo.png'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        createUserWithEmailAndPassword(database, email, password)
            .then(data => {
                console.log(data, 'authData')
                history('/my-app/src/Components/Home/Home.jsx')
            })
            .catch(error => {
              alert('This Email Already have', error)
            })

        e.target.reset()
    }
    
  return (
    <div className='login'>
      <div className="login-card">
      <img src={logo} alt="sonify-logo" className='login-logo' />
      <h3>create an accaunt</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder='write username' />
        <input type="email" placeholder='write your email' value={email} onChange={(e) => setEmail(e.target.value)}  />
        <input type="password" placeholder='write your password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="go" type='submit'>login</button>
      </form>
      </div>
    </div>
  )
}

export default Login
