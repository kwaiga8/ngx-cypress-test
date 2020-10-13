describe('My first suite', () => {
  it('first test', () => {
    console.log('elo');
    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();
    cy.get('input');
    cy.get('#inputEmail');

    //class name
    cy.get('.input-full-width');

    //atr name and value
    cy.get('[placeholder="Email"]');
  })

})
