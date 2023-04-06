import BasePage from './base-page';

class CompanySelection extends BasePage {
  get visitPage() {
    return cy.visit('/company_select.html');
  }
  get companySelectionTable() {
    return cy.get('.card-plooto');
  }

  get companyTable() {
    return cy.get('tbody > tr');
  }
}
export default new CompanySelection();
