describe('My second suite', () => {
  it('second test', () => {
    console.log('elo');
    cy.visit('/')
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();
    cy.get('[data-cy="signInButton"]]

    cy.contains('Sign in')

    cy.get('[status="warning"]', 'Sign in')
  })

})
