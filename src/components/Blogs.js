import propTypes from 'prop-types'
import Blog from '../components/Blog'

const Blogs = ({ blogs, currentUser, hanlderNotification }) =>
  <div>
    <h2>blogs</h2>
    {
      blogs.map(blog =>
        <Blog
          key={blog.id}
          blog={blog}
          currentUser={currentUser}
          hanlderNotification={hanlderNotification}
        />
      )
    }
  </div>

Blogs.propTypes = {
  blogs: propTypes.array.isRequired,
  hanlderNotification: propTypes.func.isRequired
}

export default Blogs
