import { useState } from 'react'
import Toggleable from './Toggleable'

const BlogForm = ({ addBlog }) => {
  const [newTitle, setNewTitle] = useState()
  const [newAuthor, setNewAuthor] = useState()
  const [newUrl, setNewUrl] = useState()

  const handleSubmit = event => {
    event.preventDefault()
    const blogObject = {
      title: newTitle,
      author: newAuthor,
      url: newUrl
    }

    addBlog(blogObject)
    setNewTitle('')
    setNewAuthor('')
    setNewUrl('')
  }

  return (
    <Toggleable buttonLabel='new blog'>
      <h3>Create a new blog</h3>
      <form onSubmit={handleSubmit}>
        <label hrmlfor='title'>Title</label>
        <input
          name='title'
          placeholder='title'
          value={newTitle}
          onChange={({ target }) => setNewTitle(target.value)}
        />
        <label hrmlfor='author'>Author</label>
        <input
          name='author'
          placeholder='author'
          value={newAuthor}
          onChange={({ target }) => setNewAuthor(target.value)}
        />
        <label hrmlfor='url'>Url</label>
        <input
          name='url'
          placeholder='url'
          value={newUrl}
          onChange={({ target }) => setNewUrl(target.value)}
        />
        <button type='submit'>save</button>
      </form>
    </Toggleable>
  )
}

export default BlogForm
