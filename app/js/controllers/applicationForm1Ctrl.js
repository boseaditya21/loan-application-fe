function applicationForm1Ctrl(profileService,sharedValues,applicationForm1Service) {
	'ngInject'
	
  // ViewModel
  const vm = this;
  vm.form={
  	id:'',
  	firstName:'',
  	lastName:'',
  	email:'',
	gender:'',
	dob:'',
	address:'',
	panCardNumber:''
  }

  vm.makeId=function()
  {
  	vm.text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(var i=0;i<5;i++ )
        vm.text += possible.charAt(Math.floor(Math.random() * possible.length));
    vm.form.id=vm.text;
  }

  vm.init=function()
  {
  	vm.makeId();
  	console.log(sharedValues.email);
  	var promise=profileService.fetchPersonalDetails(sharedValues.email)
  	promise.then(function(answer) {
    	console.log(answer);
    	vm.form.firstName=answer.data.details.firstName;
    	vm.form.lastName=answer.data.details.lastName;
    	vm.form.email=answer.data.details.email;
    	vm.form.gender=answer.data.details.gender;
    	vm.form.dob=answer.data.details.dob;
    	vm.form.panCardNumber=answer.data.details.panCardNumber;
      	console.log(vm.form);
      	sharedValues.form1=vm.form;
    },
    function(reason) {
    	var err = reason;
        console.log(err);
    });
    return promise;
  }

  vm.continue=function()
  {
  	var promise=applicationForm1Service.continue(vm.form);
	promise.then(function(answer) {
    	console.log(answer);
    	vm.form.firstName=answer.data.details.firstName;
    	vm.form.lastName=answer.data.details.lastName;
    	vm.form.email=answer.data.details.email;
    	vm.form.gender=answer.data.details.gender;
    	vm.form.dob=answer.data.details.dob;
    	vm.form.panCardNumber=answer.data.details.panCardNumber;
      	console.log(vm.form);
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
  name: 'applicationForm1Ctrl',
  fn: applicationForm1Ctrl
};