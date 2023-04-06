import BasePage from './base-page';

class PaymentDetailsPage extends BasePage {
  get visitPage() {
    return cy.visit('/payment_approval.html');
  }

  get header() {
    return cy.get('.details-header');
  }

  get paymentDetailsContainer() {
    return cy.get('.details-container');
  }

  get paymentDetailsContainerRow() {
    return this.paymentDetailsContainer.find('div');
  }

  get approvalHistoryTable() {
    return cy.get('.approval-history-table');
  }

  get approveButton() {
    return cy.contains('button', 'Approve');
  }

  get rejectButton() {
    return cy.contains('button', 'Reject');
  }

  verifyTitle(header: string) {
    return this.header.should('contain', header);
  }
}

export default new PaymentDetailsPage();
