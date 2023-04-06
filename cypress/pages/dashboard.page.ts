import BasePage from './base-page';

class DashboardPage extends BasePage {
  get visitPage() {
    return cy.visit('/dashboard.html');
  }

  get companyTitle() {
    return cy.get('.company-name-container');
  }

  getDashboardTab(dashboardTabHref: string) {
    return cy.get(`a[${dashboardTabHref}]`);
  }
}
export default new DashboardPage();
