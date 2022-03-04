const Notification = ({ content, type = 'hide' }) =>
  <div className={type}>
    <p>{content}</p>
  </div>

export default Notification
