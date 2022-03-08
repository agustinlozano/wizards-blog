import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import BlogField from './BlogField'

describe('<BlogField/>', () => {
  test('', () => {
    const component = render(
      <BlogField
        field={undefined}
        content='How cats rule the entire world'
      />
    )

    expect(component.container).not.toContain('Title')
  })
})
