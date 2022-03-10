import propTypes from 'prop-types'
import { useState } from 'react'
import BlogField from './BlogField'
import BlogUser from './BlogUser'
import DeleteBlog from './DeleteBlog'
import Likes from './Likes'

const Blog = ({ blog, currentUser, hanlderNotification }) => {
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
                content={blog.title}
              />
              <BlogField
                field='Author'
                content={blog.author}
              />
              <BlogField
                field='Link'
                content={blog.url}
              />
              <BlogUser user={blog.user} />

              {
                currentUser === blog.user.username
                  ? (
                    <>
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
                  : <Likes
                      blog={blog}
                      hanlderNotification={hanlderNotification}
                    />
              }
            </>
            )
          : <b>{blog.title}</b>
      }
      <button onClick={() => setAllContent(!allContent)}>{label}</button>
    </div>
  )
}

Blog.propTypes = {
  blog: propTypes.object.isRequired,
  hanlderNotification: propTypes.func.isRequired
}

export default Blog
