import propTypes from 'prop-types'

const Notification = ({ content, type = 'hide' }) =>
  <div className={type}>
    <p>{content}</p>
  </div>

Notification.propTypes = {
  content: propTypes.string.isRequired,
  type: propTypes.string
}

export default Notification
