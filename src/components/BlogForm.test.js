import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import BlogForm from './BlogForm'

describe('<BlogForm/>', () => {
  let component
  const mockHandler = jest.fn()

  beforeEach(() => {
    component = render(
      <BlogForm
        addBlog={mockHandler}
      />
    )
  })

  test('renders the right content', () => {
    component.getByText('new blog')
    component.getByPlaceholderText('title')
    component.getByPlaceholderText('author')
    component.getByPlaceholderText('url')
    component.getByText('save')
    component.getByText('Cancel')
  })

  test('after submitting the form with the fields, prop event handler is called once and blog content is rendered', () => {
    const titleField = component.getByPlaceholderText('title')
    const authorField = component.getByPlaceholderText('author')
    const ulrField = component.getByPlaceholderText('url')
    const form = component.container.querySelector('form')

    fireEvent.change(titleField, {
      target: { value: 'How cats rule the entire world' }
    })

    fireEvent.change(authorField, {
      target: { value: 'Dr. Cato' }
    })

    fireEvent.change(ulrField, {
      target: { value: 'http://www.drcato.edu/cats.html' }
    })

    fireEvent.submit(form)

    expect(mockHandler).toHaveBeenCalledTimes(1)
    expect(mockHandler.mock.calls[0][0].author).toBe('Dr. Cato')
  })
})
