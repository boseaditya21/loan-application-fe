function applicationForm2Ctrl($state,sharedValues) {
	'ngInject'
	
  // ViewModel
  const vm = this;
  vm.form={
  	annualIncome:'',
  	employmentType:'',
  	numberOfFinancialDependents:'',
  	typeOfResidence:'',
  	iHaveLivedHereFor:''
  };

  vm.continue=function()
  {
    sharedValues.form2=vm.form;
    console.log(sharedValues.form2);
    $state.go('applicationForm3');
  }
  
  }

export default {
  name: 'applicationForm2Ctrl',
  fn: applicationForm2Ctrl
};