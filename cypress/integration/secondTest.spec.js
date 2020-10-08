describe('My second suite', () => {
  it('second test', () => {
    console.log('elo');
    cy.visit('/')
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();


    cy.contains('Sign in');

    cy.get('[status="warning"]', 'Sign in');

    cy.get('#inputEmail3').parents('form').find('button');
      .should('contain', 'Sign in')
      .parents('form')
      .find('nb-checkbox')
      .click();

  })

})
