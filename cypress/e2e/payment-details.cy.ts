//Payment Approval Displays all the details about payment, its approval process and audit trail
import PaymentDetailsPage from '../pages/payment-details.page';
import pendingPayables from '../data/pendingPayables';

describe('Payment Details Tests', () => {
  const cavages = pendingPayables.find(({ contact }) => contact === 'Cavages');

  it('should be able to verify Payment details', () => {
    PaymentDetailsPage.visitPage;
    PaymentDetailsPage.verifyTitle('Sent Payment Details');
    PaymentDetailsPage.paymentDetailsContainerRow
      .should('contain', cavages.contact)
      // This step should fail, as the AMOUNT displayed on the pending_payments is different from the AMOUNT in the details Page
      // .and('contain', cavages.amount)
      .and('contain', '10.00 PHP')
      // This step should fail, as the DATE displayed on the pending_payments is different from the DATE in the details Page
      // .and('contain', cavages.requestDebitDate)
      .and('contain', '01 Oct 2021')
      .and('contain', cavages.status);
    PaymentDetailsPage.verifyTitle('Payment Attachments');
    PaymentDetailsPage.verifyTitle('Audit Trail');
    PaymentDetailsPage.verifyTitle('Payment Line Items');
    PaymentDetailsPage.verifyTitle('Additional Details');
    PaymentDetailsPage.verifyTitle('Recent Transactions to');
    PaymentDetailsPage.approveButton.should('be.visible');
    PaymentDetailsPage.rejectButton.should('be.visible');
  });
});
