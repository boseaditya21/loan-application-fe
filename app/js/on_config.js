function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  $locationProvider.html5Mode(true);

  $stateProvider

  .state('Home', {
    url: '/Home',
    controller: 'HomeCtrl as home',
    templateUrl: 'home.html',
    title: 'Home'
  })

  .state('register', {
    url: '/register',
    templateUrl: 'register.html',
    controller: 'RegisterCtrl as register',
    title: 'Register'
  })
  
  .state('login', {
    url: '/login',
    controller:'LoginCtrl as login',
    templateUrl: 'login.html',
    title: 'Login'
  })

  .state('lenderApplicationPersonalDetails', {
    url: '/lenderApplicationPersonalDetails',
    controller:'lenderApplicationPersonalDetailsCtrl as lenderApplicationPersonalDetails',
    templateUrl: 'lenderApplicationPersonalDetails.html',
    title: 'lenderApplicationPersonalDetails'
  })

  .state('lenderApplicationBankingDetails', {
    url: '/lenderApplicationBankingDetails',
    controller:'lenderApplicationBankingDetailsCtrl as lenderApplicationBankingDetails',
    templateUrl: 'lenderApplicationBankingDetails.html',
    title: 'lenderApplicationBankingDetails'
  })
  
//New Borrower Part--->Start
  .state('borrowerDashboard',{
    url:'/borrowerDashboard',
    controller:'borrowerDashboardCtrl as borrowerDashboard',
    templateUrl:'borrowerDashboard.html',
    title:'borrowerDashboard'
  })

  .state('borrowerAppliedLoans',{
    url:'/borrowerAppliedLoans',
    controller:'borrowerAppliedLoansCtrl as vm',
    templateUrl:'borrowerAppliedLoans.html',
    title:'borrowerAppliedLoans'
  })

  .state('borrowerOngoingLoans',{
    url:'/borrowerOngoingLoans',
    controller:'borrowerOngoingLoansCtrl as vm',
    templateUrl:'borrowerOngoingLoans.html',
    title:'borrowerOngoingLoans'
  })

  .state('borrowerClosedLoans',{
    url:'/borrowerClosedLoans',
    controller:'borrowerClosedLoansCtrl as vm',
    templateUrl:'borrowerClosedLoans.html',
    title:'borrowerClosedLoans'
  })

  .state('borrowerClosedLoanAdvance',{
    url:'/borrowerClosedLoanAdvance',
    controller:'borrowerClosedLoansAdvanceDetailsCtrl as vm',
    templateUrl:'borrowerClosedLoansAdvance.html',
    title:'borrowerClosedLoansAdvanceDetails'
  })

//New Borrower Part--->End

  .state('loanDetailsPopup', {
    url: '/loanDetailsPopup',
    controller:'loanDetailsPopupCtrl as loanDetailsPopup',
    templateUrl: 'popup/loanDetailsPopup.html',
    title: 'loanDetailsPopup'
  })

  .state('loanDetailsAdvanced',{
    url:'/loanDetailsAdvanced',
    controller:'loanDetailsAdvancedCtrl as loanDetailsAdvanced',
    templateUrl: 'loanDetailsAdvanced.html',
    title: 'loanDetailsAdvanced'
  })


  .state('repaymentSchedulePopup',{
    url:'/repaymentSchedulePopup',
    controller:'repaymentSchedulePopupCtrl as repaymentSchedulePopup',
    templateUrl: 'popup/repaymentSchedulePopup.html',
    title: 'repaymentSchedulePopup'
  })
  
  .state('fundTransaction',{
    url:'/fundTransaction',
    controller:'fundTransactionCtrl as fundTransaction',
    templateUrl:'fundTransaction.html',
    title:'fundTransaction'
  })


  .state('myLoanPortfolio',{
    url:'/myLoanPortfolio',
    controller:'myLoanPortfolioCtrl as myLoanPortfolio',
    templateUrl:'myLoanPortfolio.html',
    title:'myLoanPortfolio'
  })

  .state('myInvestmentDetails',{
    url:'/myInvestmentDetails',
    controller:'myInvestmentDetailsCtrl as vm',
    templateUrl:'myInvestmentDetails.html',
    title:'myInvestmentDetails'
  })

  .state('investorLoanSummary',{
    url: '/investorLoanSummary',
    controller: 'investorLoanSummaryCtrl as vm',
    templateUrl: 'investorLoanSummary.html',
    title: 'investorLoanSummary'
  })

  .state('extendLoanPaymentTerm',{
    url:'/extendLoanPaymentTerm',
    controller:'extendLoanPaymentTermPopupCtrl as extendLoanPaymentTermPopup',
    templateUrl:'popup/extendLoanPaymentTermPopup.html',
    title:'extendLoanPaymentTerm'
  })

  .state('marketPlace',{
    url:'/marketPlace',
    controller:'marketPlaceCtrl as marketPlace',
    templateUrl:'marketplace.html',
    title:'marketPlace'
  })

  .state('investorLoanDetails',{
    url:'/investorLoanDetails',
    controller:'investorLoanDetailsCtrl as vm',
    templateUrl:'investorLoanDetails.html',
    title:'investorLoanDetails'
  })

  .state('marketplaceLoanDetails',{
    url:'/marketplaceLoanDetails',
    controller:'marketplaceLoanDetailsCtrl as vm',
    templateUrl:'marketplaceLoanDetails.html',
    title:'marketplaceLoanDetails'
  })


  .state('investMoneyPopup',{
    url:'/investMoneyPopup',
    controller:'investMoneyPopupCtrl as investMoneyPopup',
    templateUrl:'popup/investMoneyPopup.html',
    title:'investMoneyPopup'
  })

  .state('accountStatement',{
    url:'/accountStatement',
    controller:'accountStatementCtrl as accountStatement',
    templateUrl:'accountStatement.html',
    title:'accountStatement'
  })

  /*.state('borrowerAppliedLoanAdvanceDetailsPopup',{
    url:'/borrowerAppliedLoanAdvanceDetailsPopup',
    controller:'borrowerAppliedLoanAdvanceDetailsPopupCtrl as vm',
    templateUrl:'popup/borrowerAppliedLoanAdvanceDetailsPopup.html',
    title:'borrowerAppliedLoanAdvanceDetailsPopup'
  })*/

  .state('depositHistory',{
    url:'/depositHistory',
    controller:'depositHistoryCtrl as vm',
    templateUrl:'depositHistory.html',
    title:'depositHistory'
  })


  .state('viewPaymentRecieved',{
    url:'/viewPaymentRecieved',
    controller: 'paymentRecievedPopupCtrl as paymentRecievedPopup',
      templateUrl: 'popup/paymentRecievedPopup.html',
    title:'viewPaymentRecieved'
  })


  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
