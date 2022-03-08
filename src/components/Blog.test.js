import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import Blog from './Blog'

describe('<blog/>', () => {
  let component
  const blog = {
    title: 'How cats rule the entire world',
    author: 'Dr. Cato',
    url: 'http://www.drcato.edu/cats.html'

  }
  const mockHandler = jest.fn()

  beforeEach(() => {
    component = render(
      <Blog
        blog={blog}
        hanlderNotification={mockHandler}
      />
    )
  })

  test('renders the right content', () => {
    expect(component.container).toHaveTextContent(
      'How cats rule the entire world'
    )
    expect(component.container).not.toHaveTextContent(
      'Dr. Cato'
    )
    expect(component.container).not.toHaveTextContent(
      'http://www.drcato.edu/cats.html'
    )
    expect(component.container).not.toHaveTextContent(
      'Likes'
    )
  })

  test('after clicking more info button, extra content is shown', () => {
    const moreInfoButton = component.getByText('+info')

    fireEvent.click(moreInfoButton)

    expect(component.container).toHaveTextContent(
      'How cats rule the entire world'
    )
    expect(component.container).toHaveTextContent(
      'Dr. Cato'
    )
    expect(component.container).toHaveTextContent(
      'http://www.drcato.edu/cats.html'
    )
    expect(component.container).toHaveTextContent(
      'Likes'
    )
  })

  // test('prop event handler is called as times as button', () => {
  //   const moreInfoButton = component.getByText('+info')

  //   fireEvent.click(moreInfoButton)

  //   const likeButton = component.getByText('like')

  //   fireEvent.click(likeButton)
  //   fireEvent.click(likeButton)

  //   expect(mockHandler).toHaveBeenCalledTimes(2)
  // })
})
