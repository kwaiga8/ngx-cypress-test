function selectGroupMenuItem(groupName) {
  cy.contains('a', groupName).then(menu => {
    cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then(attr => {
      if (atrr.includes('left')) {
        cy.wrap(menu).click();
      }
    })
  })
}

export class NavigationPage{
 formLayoutsPage(){
   cy.contains('Forms').click();
    selectGroupMenuItem('Form');
   cy.contains('Form Layouts').click();
 }

 datePickerPage(){
   cy.contains('Forms').click();
   selectGroupMenuItem('Form');
   cy.contains('Datepicker').click();
 }


}

export const navigateTo = new NavigationPage();
