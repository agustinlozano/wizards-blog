import { useState } from 'react'
import blogServices from '../services/blogs'
import loginService from '../services/login'
import Toggleable from '../components/Toggleable'

const LoginFrom = ({ handleUser }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async event => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username,
        password
      })

      window.localStorage.setItem(
        'loggedBlogAppUser', JSON.stringify(user)
      )

      blogServices.setToken(user.token)
      handleUser(user)
      setUsername('')
      setPassword('')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Toggleable buttonLabel='show login'>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type='text'
            value={username}
            name='Username'
            placeholder='Username'
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          <input
            type='password'
            value={password}
            name='Password'
            placeholder='Password'
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button>Login</button>
      </form>
    </Toggleable>
  )
}

export default LoginFrom
