function registerCtrl(registerService,$state) {
	'ngInject'
	
  // ViewModel
  const vm = this;

  vm.registerForm={
  	firstName:'',
  	lastName:'',
    email:'',
    phone:'',
  	address:'',
  	password:'',
  	confirmPassword:'',
  	securityQuestion:'',
  	securityAnswer:''
  }

  vm.submit=function()
  {
  	console.log(vm.registerForm);
  	var promise=registerService.register(vm.registerForm);
  	promise.then(function(answer) {
      console.log(answer);
        if(answer.data='Registered Successfully'){
          console.log(answer);
            $state.go('Login')
          }
      },
      function(reason) {
        var err = reason;
        console.log(err);
      });
 
    return promise;
  }

  vm.disable=function()
  {
  	if(vm.registerForm.firstName && vm.registerForm.lastName && vm.registerForm.address && vm.registerForm.phone && vm.registerForm.password && vm.registerForm.confirmPassword && vm.registerForm.securityQuestion && vm.registerForm.securityAnswer &&(vm.registerForm.password==vm.registerForm.confirmPassword))
  	{
  		return false;
  	}
  	else
  	{
  		return true;
  	}
  }

  }

export default {
  name: 'registerCtrl',
  fn: registerCtrl
};