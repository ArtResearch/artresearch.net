describe('Login page', () => {
    it('Visits login page, enter credentials & submit', () => {
      cy.visit('http://localhost:10224/login')
      cy.get('input[name="username"]').click().type("admin")
      cy.get('input[name="password"]').click().type("admin")
      cy.get('input[type="submit"]').click().url().should('eq', 'http://localhost:10224/resource/start') 
    })
  })