import { useState } from 'react'
import blogService from '../services/blogs'

const Likes = ({ blog }) => {
  const [like, setLike] = useState(false)
  const [likes, setLikes] = useState(blog.likes)

  const handleLike = async () => {
    const blogDB = await blogService.getSingleBlog(blog.id)

    if (like) {
      const updatedInfo = { ...blogDB, likes: blogDB.likes - 1 }

      blogService.update(updatedInfo, blog.id)
      setLike(!like)
      setLikes(updatedInfo.likes)
    } else {
      const updatedInfo = { ...blogDB, likes: blogDB.likes + 1 }

      blogService.update(updatedInfo, blog.id)
      setLike(!like)
      setLikes(updatedInfo.likes)
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
export default Likes
