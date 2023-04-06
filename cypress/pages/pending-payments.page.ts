import BasePage from './base-page';

class PendingPayment extends BasePage {
  get visitPage() {
    return cy.visit('/pending_payments.html');
  }

  get pendingPaymentTable() {
    return cy.get('#pending_payables');
  }

  get pendingPaymentTableRows() {
    return this.pendingPaymentTable.find('tbody tr');
  }
}

export default new PendingPayment();
