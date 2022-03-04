import { useState } from 'react'

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
            </>
            )
          : <b>{blog.title}</b>
      }
      <button onClick={() => setAllContent(!allContent)}>{label}</button>
    </div>
  )
}
export default Blog
