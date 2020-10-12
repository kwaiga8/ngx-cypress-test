describe('Test with Page Object', () =>{

  beforeEach('open application', () =>{
    cy.visit('/')
  })

  it('verify navigation across the pages', () =>{
    navigateTo.formLayoutsPage();
    navigateTo.datePickerPage();
    navigateTo.toasterPage();
    navigateTo.smartTablePage();
    navigateTo.tooltipPage();
  })
})
