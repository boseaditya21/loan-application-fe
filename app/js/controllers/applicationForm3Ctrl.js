function applicationForm3Ctrl(sharedValues,$state) {
	'ngInject'
	
  // ViewModel
  const vm = this;
  vm.form={
  loanPurpose:'',
  paymentFrequency:'',
  leaseTerm:''
  }

  vm.continue=function()
  {
    sharedValues.form3=vm.form;
    console.log(sharedValues.form3);
    $state.go('applicationForm4');
  }
  
}

export default {
  name: 'applicationForm3Ctrl',
  fn: applicationForm3Ctrl
};