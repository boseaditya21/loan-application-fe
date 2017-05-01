function sharedValues() {
  'ngInject'

  // ViewModel
    const service = {};

  //Global data:-
    service.accId = '';
    service.loanId='';
  //investor and borrower data part for heading heading
    sharedValues.investor={
      'inv-mlp':'My Loan Portfolio',
      'inv-tf':'Transfer Funds',
      'inv-as':'Account Statement',
      'inv-dh':'Deposit History',
      'inv-mi':'My Investments',
      'inv-ls':'Loan Summary',
      'inv-m':'Marketplace',
    };


  //User is investor or borrower 
    sharedValues.checkBorrower=false;
    sharedValues.checkInvestor=false;

  //Borrower Details:-
    //Applied Loans:
      sharedValues.borrowerAppliedLoanDetails={};
    //Ongoing Loans:
      sharedValues.borrowerOngoingLoansDetails={};
      sharedValues.borrowerOngoingLoansBasic={};
      sharedValues.borrowerOngoingLoansAdvanced={};
      //Loan Details Advance:
        sharedValues.borrowerOngoingLoansAmotizationDetails={};
        sharedValues.getTransactionHistorySummary={};
        sharedValues.generatePayoffQuote={};
        sharedValues.loanContractId='';
        sharedValues.loanDetailsAdvance={};
    //Closed Loans:
      sharedValues.borrowerClosedLoansDetails={};
      //Loan Details Advance:
        sharedValues.borrowerClosedLoansAdvancedDetails={};
        sharedValues.loanDetailsAdvanceforClosedLoans={};



  sharedValues.getamotizationDetails={};
  sharedValues.Details={};
  sharedValues.details={};
  sharedValues.details1={};
  sharedValues.details2={};
  
  
  sharedValues.applicationDetails={};
  sharedValues.flag=true;
  sharedValues.term='';
  sharedValues.myInvestmentDetails={};
  sharedValues.investmentMoreDetails={};
  sharedValues.loanApplicationDetails={};
  sharedValues.marketplaceLoanDetails1={};
  sharedValues.marketplaceLoanDetails2={};
  return service;
  }

export default {
  name: 'sharedValues',
  fn: sharedValues
};
