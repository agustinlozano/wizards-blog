import Blog from '../components/Blog'

const Blogs = ({ blogs, hanlderNotification }) =>
  <div>
    <h2>blogs</h2>
    {
      blogs.map(blog =>
        <Blog
          key={blog.id}
          blog={blog}
          hanlderNotification={hanlderNotification}
        />
      )
    }
  </div>

export default Blogs
