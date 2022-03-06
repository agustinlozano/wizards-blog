import { useState } from 'react'
import BlogField from './BlogField'
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
              <BlogField
                fild={false}
                content={blog.title}
              />
              <BlogField
                fild='Author'
                content={blog.author}
              />
              <BlogField
                fild='Link'
                content={blog.url}
              />
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
