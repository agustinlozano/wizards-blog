import { useState } from 'react'
import Likes from './Likes'

const Blog = ({ blog }) => {
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
