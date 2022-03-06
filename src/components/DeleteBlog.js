import propTypes from 'prop-types'
import blogService from '../services/blogs'
import { showNotification } from '../utils/helper_methods'

const DeleteBlog = ({ blog, hanlderNotification }) => {
  const deleteBlog = async () => {
    const newNotification = {
      content: 'The blog has been deleted',
      type: 'success-notification'
    }

    try {
      const result = window.confirm(`Do you want to remove ${blog.title} from the list?`)
      if (result) {
        await blogService._delete(blog.id)
        showNotification(hanlderNotification, newNotification)
      }
    } catch (error) {
      newNotification.content = 'The blog could not be deleted'
      newNotification.type = 'failure-notification'

      showNotification(hanlderNotification, newNotification)
      console.error(error.message)
    }
  }

  return <button onClick={deleteBlog}>delete</button>
}

DeleteBlog.propTypes = {
  blog: propTypes.object.isRequired,
  hanlderNotification: propTypes.func.isRequired
}

export default DeleteBlog
