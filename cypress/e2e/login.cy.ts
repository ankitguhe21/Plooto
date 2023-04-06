import LoginPage from '../pages/login.page';
import companySelectionPage from '../pages/company-selection.page';
describe('Login Tests', () => {
  it('Should be able to login with Valid Credentials', () => {
    LoginPage.visitPage;
    LoginPage.username.type('demo@gmail.com');
    LoginPage.password.type('demoPass');
    LoginPage.submitButton.click();
    cy.url().should('include', '/company_select.html');
    companySelectionPage.companySelectionTable.should('be.visible');
  });

  it('Should not be able to login with empty email', () => {
    cy.log('Failing Intentionally');
    LoginPage.visitPage;
    LoginPage.username.type('demo@gmail.com');

    LoginPage.submitButton.click();
    LoginPage.errorFeild.should('contain', 'Feild is required');
  });

  it('Should not be able to login with empty password', () => {
    cy.log('Failing Intentionally');
    LoginPage.visitPage;
    LoginPage.password.type('demoPass');

    LoginPage.submitButton.click();
    LoginPage.errorFeild.should('contain', 'Feild is required');
  });

  it('Should not be able to login with empty feilds', () => {
    cy.log('Failing Intentionally');
    LoginPage.visitPage;
    LoginPage.submitButton.click();
    LoginPage.errorFeild.should('contain', 'Feild is required');
  });
});
