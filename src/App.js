import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import BlogForm from './components/BlogForm'
import LoginForm from './components/LoginForm'
import blogService from './services/blogs'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(false)

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const addBlog = blogObject => {
    blogService.create(blogObject)
      .then(() => {
        setBlogs(blogs.concat(blogObject))
      })
      .catch(error => {
        const message = error.message.data
        console.error(message)
      })
  }

  const handleLogout = () => {
    setUser(null)
    blogService.setToken(user.token)
    window.localStorage.removeItem('loggedNoteAppUser')
  }

  return (
    <div>
      <h1>Wizard's blogs</h1>
      {
        user
          ? <BlogForm
              addBlog={addBlog}
              handleLogout={handleLogout}
            />
          : <LoginForm
              handleUser={setUser}
            />
      }
      <h2>blogs</h2>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
}

export default App
