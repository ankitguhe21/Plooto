import companies from '../data/companyList';
import CompanySelection from '../pages/company-selection.page';
import DashboardPage from '../pages/dashboard.page';

describe('Company Selection Tests', () => {
  companies.forEach(function (company) {
    it(`Should be able to verify company details: ${company.name}`, () => {
      CompanySelection.visitPage;
      CompanySelection.companyTable.should('be.visible');
      CompanySelection.companyTable.contains('td', company.name).should('be.visible');
      CompanySelection.companyTable.contains('td', company.status).should('be.visible');
      CompanySelection.companyTable.contains('td', company.OutstandingItems).should('be.visible');
    });
  });

  it('Should be able to Navigate to Dashboard', () => {
    CompanySelection.visitPage;
    CompanySelection.companyTable.should('be.visible');
    CompanySelection.companyTable.contains('td', 'Plooto Inc').click();
    cy.url().should('include', '/dashboard.html');
    DashboardPage.companyTitle.should('contain', 'Plooto Inc');
  });
});
