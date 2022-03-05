import blogService from '../services/blogs'
import { showNotification } from '../utils/helper_methods'

const DeleteBlog = ({ blog, hanlderNotification }) => {
  const deleteBlog = async () => {
    const newNotification = {
      content: 'The blog has been deleted',
      type: 'success-notification'
    }

    try {
      await blogService._delete(blog.id)

      showNotification(hanlderNotification, newNotification)
    } catch (error) {
      newNotification.content = 'The blog could not be deleted'
      newNotification.type = 'failure-notification'

      showNotification(hanlderNotification, newNotification)
      console.error(error.message)
    }
  }

  return <button onClick={deleteBlog}>delete</button>
}

export default DeleteBlog
