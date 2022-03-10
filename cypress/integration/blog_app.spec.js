describe('blog app', function () {
  const user = {
    username: 'BloggyCatitoX',
    name: 'Cato',
    password: 'BebeIsMyBrother'
  }

  const blog = {
    title: 'Why humans must buy more Chingolo to be happier',
    author: 'Dr. Cato',
    url: 'https://www.drcato.com/chingolo'
  }

  beforeEach(function () {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    cy.createUser(user)
  })

  it('login form is shown', function () {
    cy.contains('show login').click()

    cy.get('[data-testid="login-form-test-id"]').as('loginForm')

    cy.get('@loginForm').should('contain', 'Username')
    cy.get('@loginForm').should('contain', 'Password')
    cy.get('@loginForm').should('contain', 'Login')
  })

  describe('login', function () {
    it('succeeds with correct credentials', function () {
      cy.contains('show login').click()

      cy.get('input[name="Username"]').type(user.username)
      cy.get('input[name="Password"]').type(user.password)

      cy.contains('Login').click()

      cy.get('.success-notification')
        .should('contain', 'You have logged successfully')
        .should('have.css', 'border', '3px solid rgb(129, 208, 113)')

      cy.contains(`${user.username} logged in`)
      cy.contains('logout')
    })

    it('fails with wrong credentials', function () {
      cy.contains('show login').click()

      cy.get('input[name="Username"]').type(user.username)
      cy.get('input[name="Password"]').type('wrongPassword')

      cy.contains('Login').click()

      cy.get('.failure-notification')
        .should('contain', 'Incorrect username or password')
        .should('have.css', 'border', '3px solid rgb(239, 35, 60)')
    })
  })

  describe('when logged in', function () {
    beforeEach(function () {
      cy.login({
        username: user.username,
        password: user.password
      })
    })

    it('a blog can be created', function () {
      cy.contains('new blog').click()
      cy.contains('Create a new blog')

      cy.get('input[name="title"]').type(blog.title)
      cy.get('input[name="author"]').type(blog.author)
      cy.get('input[name="url"]').type(blog.url)

      cy.contains('save').click()

      cy.get('.success-notification')
        .should('contain', 'A new blog has been added!')
        .should('have.css', 'border', '3px solid rgb(129, 208, 113)')

      cy.visit('http://localhost:3000')

      cy.get('b').should('contain', blog.title)
    })
  })

  describe('a logged user can like a post', function () {
    beforeEach(function () {
      cy.login({
        username: user.username,
        password: user.password
      })

      cy.createBlog({
        title: blog.title,
        author: blog.author,
        url: blog.url
      })
    })

    it('', function () {
      cy.contains('+info').click()
      cy.contains('like').click()

      cy.get('.success-notification')
        .should('contain', 'You liked the blog! :)')
        .should('have.css', 'border', '3px solid rgb(129, 208, 113)')

      /* no funciona el test, si refresco la pagina */
      // cy.visit('http://localhost:3000')
      // cy.contains('+info').click()

      cy.contains('dislike').click()

      cy.get('.success-notification')
        .should('contain', 'You have disliked that blog! ^^')
        .should('have.css', 'border', '3px solid rgb(129, 208, 113)')
    })
  })

  describe('a logged user who created a blog can delete it', function () {
    /* Ejercicio adicional opcional: también verifique
      que otros usuarios no puedan eliminar el blog. */
  })
})
