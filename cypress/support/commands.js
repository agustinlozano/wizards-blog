Cypress.Commands.add('createUser', user => {
  cy.request('POST', 'http://localhost:3003/api/users', user)
  cy.visit('http://localhost:3000')
})

Cypress.Commands.add('login', ({ username, password }) => {
  cy.request('POST', 'http://localhost:3003/api/login', {
    username,
    password
  }).then(response => {
    localStorage.setItem(
      'loggedBlogAppUser', JSON.stringify(response.body)
    )
    cy.visit('http://localhost:3000')
  })
})

Cypress.Commands.add('createNote', ({ title, author, url }) => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:3003/api/blogs',
    body: {
      title,
      author,
      url
    },
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('loggedBlogAppUser')).token}`
    }
  })
  cy.visit('http://localhost:3000')
})
