import propTypes from 'prop-types'
import { useState } from 'react'
import blogService from '../services/blogs'
import { showNotification } from '../utils/helper_methods'

const Likes = ({ blog, hanlderNotification }) => {
  const [like, setLike] = useState(false)
  const [likes, setLikes] = useState(blog.likes)

  const handleLike = async () => {
    const newNotification = {
      content: 'You must be logged to like a blog!',
      type: 'failure-notification'
    }

    try {
      const blogDB = await blogService.getSingleBlog(blog.id)

      if (like) {
        const updatedInfo = { ...blogDB, likes: blogDB.likes - 1 }

        await blogService.update(updatedInfo, blog.id)

        newNotification.content = 'You have disliked that blog! ^^'
        newNotification.type = 'success-notification'

        setLike(!like)
        setLikes(updatedInfo.likes)
        showNotification(hanlderNotification, newNotification)
      } else {
        const updatedInfo = { ...blogDB, likes: blogDB.likes + 1 }

        await blogService.update(updatedInfo, blog.id)

        newNotification.content = 'You liked the blog! :)'
        newNotification.type = 'success-notification'

        setLike(!like)
        setLikes(updatedInfo.likes)
        showNotification(hanlderNotification, newNotification)
      }
    } catch (error) {
      showNotification(hanlderNotification, newNotification)
      console.error(error.message)
    }
  }

  return (
    <div style={{ display: 'flex' }}>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>
        {like ? 'dislike' : 'like'}
      </button>
    </div>
  )
}

Likes.propTypes = {
  blog: propTypes.object.isRequired,
  hanlderNotification: propTypes.func.isRequired
}

export default Likes
