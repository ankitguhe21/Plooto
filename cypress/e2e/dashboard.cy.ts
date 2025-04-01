import DashboardPage from '../pages/dashboard.page';
import PaymentApproval from '../pages/payment-approvals.page';
import PendingPayment from '../pages/pending-payments.page';

import dashboardTabs from '../data/dashboardTab';

describe('Dashboard Tests', () => {
  dashboardTabs.forEach(function (dashboardTab) {
    it(`should be able to verify company details: ${dashboardTab.name} `, () => {
      DashboardPage.visitPage;
      DashboardPage.companyTitle.should('contain', 'Plooto Inc');
      DashboardPage.getDashboardTab(dashboardTab.href).should('contain', dashboardTab.name);
    });
  });

  it('should be able to navigate to Payment Approvals from Dashboard', () => {
    DashboardPage.visitPage;
    DashboardPage.companyTitle.should('contain', 'Plooto Inc');
    DashboardPage.getDashboardTab('href="#user/dashboard/approvePayments"').click();
    PaymentApproval.verifyHeader('Payment approvals');
    PaymentApproval.paymentApprovalTable.should('be.visible');
  });

  it('should be able to navigate to Pending Payment from Dashboard', () => {
    DashboardPage.visitPage;
    DashboardPage.companyTitle.should('contain', 'Plooto Inc');
    DashboardPage.getDashboardTab('href="#user/dashboard/pendingPayments"').click();
    PendingPayment.verifyHeader('Payments currently in transit');
    PendingPayment.pendingPaymentTable.should('be.visible');
    //adde
  });
});
