function forgotPasswordCtrl(forgotPasswordService,$state) {
	'ngInject'
	
  // ViewModel
  const vm = this;
  vm.flag=false;
  vm.form={
  	email:''
  }
  vm.securityQuestion='';
  vm.form1={
  	securityAnswer:'',
  	email:vm.form.email
  }
  vm.submit = function() {
      var promise = forgotPasswordService.submit(vm.form);
      promise.then(function(answer) {
      	console.log(answer);
        if(answer.status==200){
          console.log(answer);
          vm.securityQuestion=answer.data.securityQuestion.securityQuestion;

          vm.flag=true;
          console.log(vm.flag);
          }
      },
      function(reason) {
        var err = reason;
        console.log(err);
      });
 
    return promise;
  }

  vm.check=function()
  {
  	vm.form1.email=vm.form.email;
  	console.log(vm.form1);
  	var promise = forgotPasswordService.check(vm.form1);
  	promise.then(function(answer) {
  		console.log(answer);
        if(answer.status==200 && answer.data.success==true){
          console.log(answer);
          $state.go('Login');
      }
      },
      function(reason) {
        var err = reason;
        console.log(err);
      });
 
    return promise;
  }

  vm.disableSubmit=function()
  {
  	if(vm.form.email!='')
  		return false;
  	else
  		return true;
  }

  vm.disableCheck=function()
  {
  	if(vm.form1.securityAnswer!='')
  		return false;
  	else
  		return true;
  }
  }

export default {
  name: 'forgotPasswordCtrl',
  fn: forgotPasswordCtrl
};