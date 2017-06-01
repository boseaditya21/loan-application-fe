function applicationForm4Ctrl(applicationFormService,sharedValues,$state) {
	'ngInject'
	
  // ViewModel
  const vm = this;
  vm.form={
  employmentStatus:'',
  netIncome:'',
  frequencyOfIncome:'',
  nextPaymentDate:'',
  occupation:''
  }

  vm.continue=function()
  {
    sharedValues.form4=vm.form;
    console.log(sharedValues.form4);
    $state.go('applicationForm4');
    vm.finalForm={
    id:sharedValues.form1.id,
    firstName:sharedValues.form1.firstName,
    lastName:sharedValues.form1.lastName,
    email:sharedValues.form1.email,
    gender:sharedValues.form1.gender,
    dob:sharedValues.form1.dob,
    address:sharedValues.form1.address,
    panCardNumber:sharedValues.form1.panCardNumber,
    annualIncome:sharedValues.form2.annualIncome,
    employmentType:sharedValues.form2.employmentType,
    numberOfFinancialDependents:sharedValues.form2.numberOfFinancialDependents,
    typeOfResidence:sharedValues.form2.typeOfResidence,
    iHaveLivedHereFor:sharedValues.form2.iHaveLivedHereFor,
    loanPurpose:sharedValues.form3.loanPurpose,
    paymentFrequency:sharedValues.form3.paymentFrequency,
    leaseTerm:sharedValues.form3.leaseTerm,
    employmentStatus:sharedValues.form4.employmentStatus,
    netIncome:sharedValues.form4.netIncome,
    frequencyOfIncome:sharedValues.form4.frequencyOfIncome,
    nextPaymentDate:sharedValues.form4.nextPaymentDate,
    occupation:sharedValues.form4.occupation
    }
    console.log(vm.finalForm);
    var promise=applicationFormService.submit(vm.finalForm);
    promise.then(function(answer) {
      console.log(answer);
      if(answer.status==200 && answer.statusText=='OK')
      {
        $state.go('congratulations')
      }
    },
    function(reason) {
      var err = reason;
        console.log(err);
    });
    return promise;
  }

  }

export default {
  name: 'applicationForm4Ctrl',
  fn: applicationForm4Ctrl
};