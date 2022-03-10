import { useState } from 'react'
import { showNotification } from '../utils/helper_methods'
import blogServices from '../services/blogs'
import loginService from '../services/login'
import Toggleable from '../components/Toggleable'
import FormField from './FormField'
import propTypes from 'prop-types'

const LoginFrom = ({ handleUser, hanlderNotification }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async event => {
    event.preventDefault()
    const newNotification = {
      content: 'You have logged successfully',
      type: 'success-notification'
    }

    try {
      const user = await loginService.login({
        username,
        password
      })

      window.localStorage.setItem(
        'loggedBlogAppUser', JSON.stringify(user)
      )

      showNotification(hanlderNotification, newNotification)
      blogServices.setToken(user.token)
      handleUser(user)
      setUsername('')
      setPassword('')
    } catch (error) {
      newNotification.content = 'Incorrect username or password'
      newNotification.type = 'failure-notification'

      showNotification(hanlderNotification, newNotification)
      console.error(error.message)
    }
  }

  return (
    <Toggleable buttonLabel='show login'>
      <form
        onSubmit={handleLogin}
        data-testid='login-form-test-id'
      >
        <label htmlFor='Username'>Username
          <FormField
            type='text'
            name='Username'
            value={username}
            handleChange={({ target }) => setUsername(target.value)}
          />
        </label>
        <label>Password
          <FormField
            type='password'
            name='Password'
            value={password}
            handleChange={({ target }) => setPassword(target.value)}
          />
        </label>
        <button type='submit'>Login</button>
      </form>
    </Toggleable>
  )
}

LoginFrom.propTypes = {
  handleUser: propTypes.func.isRequired,
  hanlderNotification: propTypes.func.isRequired
}

export default LoginFrom
