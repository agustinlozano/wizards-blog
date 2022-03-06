import { useState } from 'react'
import FormField from './FormField'
import Toggleable from './Toggleable'

const BlogForm = ({ addBlog }) => {
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')

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
        <FormField
          type='text'
          name='title'
          value={newTitle}
          placeholder='title'
          handleChange={({ target }) => setNewTitle(target.value)}
        />
        <label hrmlfor='author'>Author</label>
        <FormField
          type='text'
          name='author'
          value={newAuthor}
          placeholder='author'
          handleChange={({ target }) => setNewAuthor(target.value)}
        />
        <label hrmlfor='url'>Url</label>
        <FormField
          type='text'
          name='url'
          value={newUrl}
          placeholder='url'
          handleChange={({ target }) => setNewUrl(target.value)}
        />
        <button type='submit'>save</button>
      </form>
    </Toggleable>
  )
}

export default BlogForm
