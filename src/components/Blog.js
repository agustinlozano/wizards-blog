import { useState } from 'react'
import DeleteBlog from './DeleteBlog'
import Likes from './Likes'

const Blog = ({ blog, hanlderNotification }) => {
  const [allContent, setAllContent] = useState(false)

  const label = allContent
    ? 'hide'
    : '+info'

  return (
    <div>
      {
        allContent
          ? (
            <>
              <b>{blog.title}</b>
              <p>Author: {blog.author}</p>
              <p>Link: {blog.url}</p>
              <Likes
                blog={blog}
                hanlderNotification={hanlderNotification}
              />
              <DeleteBlog
                blog={blog}
                hanlderNotification={hanlderNotification}
              />
            </>
            )
          : <b>{blog.title}</b>
      }
      <button onClick={() => setAllContent(!allContent)}>{label}</button>
    </div>
  )
}
export default Blog
