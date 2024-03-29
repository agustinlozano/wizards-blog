import { useState, useEffect } from 'react'
import blogService from './services/blogs'
import Blogs from './components/Blogs'
import BlogForm from './components/BlogForm'
import LoginForm from './components/LoginForm'
import Notification from './components/Notification'
import UserProfile from './components/UserProfile'
import { showNotification } from './utils/helper_methods'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(false)
  const [notification, setNotification] = useState({ content: '', type: '' })

  useEffect(() => {
    const newNotification = { content: '', type: '' }

    blogService.getAll()
      .then(blogs => {
        const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
        if (loggedUserJSON) {
          const user = JSON.parse(loggedUserJSON)
          setUser(user)
          blogService.setToken(user.token)
        }
        setBlogs(blogs)
      })
      .catch(err => {
        newNotification.content = 'Error: blogs cannot be accessed'
        newNotification.type = 'failure-notification'

        showNotification(setNotification, newNotification)
        console.error(err)
      })
  }, [])

  const addBlog = blogObject => {
    const newNotification = {
      content: 'A new blog has been added!',
      type: 'success-notification'
    }

    blogService.create(blogObject)
      .then(() => {
        blogObject.user = { username: user.username }
        setBlogs(blogs.concat(blogObject))
        showNotification(setNotification, newNotification)
      })
      .catch(error => {
        newNotification.content = 'The blog cannot be added'
        newNotification.type = 'failure-notification'

        showNotification(setNotification, newNotification)
        console.error(error.message.data)
      })
  }

  const currentUser = user
    ? user.username
    : 'anonymous user'

  return (
    <div>
      <h1>Wizard's blogs</h1>
      <Notification
        content={notification.content}
        type={notification.type}
      />
      {
        user
          ? (
            <>
              <UserProfile
                user={user}
                handleUser={setUser}
              />
              <BlogForm
                addBlog={addBlog}
              />
            </>
            )
          : <LoginForm
              handleUser={setUser}
              hanlderNotification={setNotification}
            />
      }
      <Blogs
        blogs={blogs}
        currentUser={currentUser}
        hanlderNotification={setNotification}
      />
    </div>
  )
}

export default App
