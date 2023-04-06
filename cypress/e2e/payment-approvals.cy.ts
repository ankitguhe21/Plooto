import PaymentApproval from '../pages/payment-approvals.page';

const companyTitle: string = 'Buena Vista Realty Service';
describe('Payment Approval Tests', () => {
  it('should be able to verify Payment approval details', () => {
    PaymentApproval.visitPage;
    PaymentApproval.verifyHeader('Payment approvals');
    PaymentApproval.paymentApprovalTable.should('have.class', 'active');
    PaymentApproval.getCompanyTitle(companyTitle).should('be.visible');
  });
});
