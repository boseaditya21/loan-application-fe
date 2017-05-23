function profileCtrl(profileService,sharedValues) {
	'ngInject'
	
  // ViewModel
  const vm = this;
  vm.form={
    address:'',
    email:'',
    firstName:'',
    lastName:'',
    phone:''
  }

  vm.init=function()
  {
    console.log(sharedValues.email);
  	var promise=profileService.fetchPersonalDetails(sharedValues.email)
  	promise.then(function(answer) {
      console.log(answer);
      vm.form.address=answer.data.details.address;
      vm.form.email=answer.data.details.email;
      vm.form.firstName=answer.data.details.firstName;
      vm.form.lastName=answer.data.details.lastName;
      vm.form.phone=answer.data.details.phone;
      sharedValues.personalDetails=vm.form;
      },
      function(reason) {
        var err = reason;
        console.log(err);
      });
 
    return promise;
  }

  vm.init();
  
  }

export default {
  name: 'profileCtrl',
  fn: profileCtrl
};