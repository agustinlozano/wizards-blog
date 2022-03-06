import propTypes from 'prop-types'

const BlogField = ({ fild, content }) =>
  <>
    {
      (fild !== false)
        ? <p>{`${fild}: `} {content}</p>
        : <b>{content}</b>
    }
  </>

BlogField.propTypes = {
  fild: propTypes.string,
  content: propTypes.string.isRequired
}

export default BlogField
