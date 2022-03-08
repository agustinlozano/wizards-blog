import propTypes from 'prop-types'

const BlogField = ({ field, content }) =>
  <>
    {
      field
        ? <p>{`${field}: `} {content}</p>
        : <b>{content}</b>
    }
  </>

BlogField.propTypes = {
  fild: propTypes.string,
  content: propTypes.string.isRequired
}

export default BlogField
