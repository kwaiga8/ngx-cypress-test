export class SmartTable{

  updateAgeByFirstName(name, age){
    cy.get('tbody').contains('tr', name).then(tableRow =>{
      cy.wrap(tableRow).find('.nb-edit').click();
    })

  }


}

export const onSmartTablePage = new SmartTable();
