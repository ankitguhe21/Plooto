export default class BasePage {
  
  get errorFeild() {
    return cy.get('.tooltip-error');
  }

  verifyHeader(headerText: string) {
    return cy.contains('h3', headerText).should('be.visible');
  }

  getCompanyTitle(title: string) {
    return cy.get(`span[title="${title}"]`);
  }
}
