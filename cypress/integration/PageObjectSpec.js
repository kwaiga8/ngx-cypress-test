import {onFormLayoutsPage} from "../support/page_objects/formLayoutsPage.js";
import {navigateTo} from "../support/page_objects/navigationPage.js";
import {onDatePickerPage} from "../support/page_objects/datepickerPage";

describe('Test with Page Object', () =>{


  beforeEach('open application', () =>{
    cy.visit('/')
  });

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
    navigateTo.datePickerPage();
    onDatePickerPage.selectCommonDatepickerDateFromToday(1);
    onDatePickerPage.selectDatepickerWithRangeFromToday(7,14);
  });
});
