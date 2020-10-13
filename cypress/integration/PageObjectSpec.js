import {onFormLayoutsPage} from "../support/page_objects/formLayoutsPage";
import {navigateTo} from "../support/page_objects/navigationPage";




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
  });

  it(' should submit Inline and Basic form and select tomorrow date in the calendar', () =>{
    navigateTo.formLayoutsPage();
    onFormLayoutsPage.submitInLineFormWithNameAndEmail('Wlodek', 'wlo@wp.pl');
    onFormLayoutsPage.submitBasicFormWithEmailAndPassword('olo@op.pl', 'Kasia1234');
  });
})
