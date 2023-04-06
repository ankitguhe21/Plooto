import BasePage from './base-page';

class LoginPage extends BasePage {
  get username() {
    return cy.get('input[id="email"]');
  }

  get password() {
    return cy.get('input[id="passphrase"]');
  }
  get submitButton() {
    return cy.contains('a', 'Sign In');
  }
  get visitPage() {
    return cy.visit('/login');
  }
}

export default new LoginPage();
