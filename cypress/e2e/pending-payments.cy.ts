import PendingPayment from '../pages/pending-payments.page';
import PaymentDetailsPage from '../pages/payment-details.page';

import pendingPayables from '../data/pendingPayables';

describe('Pending Payment Tests', () => {
  pendingPayables.forEach(function (pendingPayable) {
    it(`should be able to verify Pending Payment details for : ${pendingPayable.contact}`, () => {
      PendingPayment.visitPage;
      PendingPayment.verifyHeader('Payments currently in transit');
      PendingPayment.pendingPaymentTable.should('have.class', 'active');
      PendingPayment.pendingPaymentTableRows
        .should('contain', pendingPayable.contact)
        .and('contain', pendingPayable.amount)
        .and('contain', pendingPayable.deliveryDate)
        .and('contain', pendingPayable.status)
        .and('contain', pendingPayable.requestDebitDate);
    });
  });

  it('should be able to navigate to payment details page for: Cavages', () => {
    PendingPayment.visitPage;
    PendingPayment.verifyHeader('Payments currently in transit');
    PendingPayment.pendingPaymentTable.should('have.class', 'active');
    PendingPayment.pendingPaymentTableRows.contains('Cavages').click();
    cy.url().should('include', '/payment_approval.html');
    PaymentDetailsPage.verifyTitle('Sent Payment Details');
  });
});
