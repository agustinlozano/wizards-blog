import blogService from '../services/blogs'
import propTypes from 'prop-types'

const UserProfile = ({ user, handleUser }) => {
  const handleLogout = () => {
    handleUser(null)
    blogService.setToken(user.token)
    window.localStorage.removeItem('loggedBlogAppUser')
  }

  return (
    <div>
      <p><b>{user.username}</b> logged in</p>
      <button
        onClick={handleLogout}
        id='btn'
      >
        logout
      </button>
    </div>
  )
}

UserProfile.propTypes = {
  user: propTypes.object.isRequired,
  handleUser: propTypes.func.isRequired
}

export default UserProfile
