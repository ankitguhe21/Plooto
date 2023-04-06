import BasePage from './base-page';

class PaymentApproval extends BasePage {
  get visitPage() {
    return cy.visit('/payment_approvals.html');
  }

  get paymentApprovalTable() {
    return cy.get('#approve_payments');
  }
}

export default new PaymentApproval();
