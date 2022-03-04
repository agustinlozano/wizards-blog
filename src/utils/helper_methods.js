export const showNotification = (hanlderNotification, notification) => {
  setTimeout(() => {
    hanlderNotification({ content: '', type: 'hide' })
  }, 5000)
  hanlderNotification(notification)
}
