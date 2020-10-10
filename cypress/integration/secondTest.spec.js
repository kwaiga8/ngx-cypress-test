describe('My second suite', () => {
  it('second test', () => {
    console.log('elo');
    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();


    cy.contains('Sign in');

    cy.get('[status="warning"]', 'Sign in');

    cy.get('#inputEmail3').parents('form').find('button')
      .should('contain', 'Sign in')
      .parents('form')
      .find('nb-checkbox')
      .click();
    cy.contains('nb-card', 'Horizontal form').find('[type="email"]')

  });


  it('then and wrap methods', () => {
    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();
    //not generic
  //   cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', "Email")
  //   cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', "Password")
  // })


  // how to extract element, generic, saving context for
    //jquery context ===EXPECT , cypress context ==SHOULD
  cy.contains('nb-card', 'Using the Grid').then(firstForm => {
    const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text();
    const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text();
    expect(emailLabelFirst).to.equal('Email');
    expect(passwordLabelFirst).to.equal('Password');

    cy.wrap(firstForm).find('[for="inputEmail1"]').should('contain', 'Email')
  })
});

  it.only('invoke command', () => {
    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();
    //1
    cy.get(('[for="inputEmail1"]')).should('contain', 'Email address');
  });


});
