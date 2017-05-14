function loginCtrl(LoginService, $state, $rootScope, $cookies,sharedValues) {
  'ngInject';
  // ViewModel
  const vm = this;
  vm.loginForm = {
    password: '',
    email: '',
    rememberMe:''
  }
  vm.doLogin = function() {
      var promise = LoginService.userLogin(vm.loginForm);
      promise.then(function(answer) {
        if(answer.status==200 && answer.data.success==true){
          console.log(answer);
            sharedValues.email=vm.loginForm.email;
            console.log(sharedValues.accId);
            $rootScope.accessToken=answer.data.token;
            if(vm.loginForm.rememberMe==true)
            {
              $cookies.put('token', $rootScope.accessToken);
            }
            $state.go('Profile');
          }
      },
      function(reason) {
        var err = reason;
        console.log(err);
      });
 
    return promise;
  }

  vm.disableLogin=function()
  {
    if(vm.loginForm.email && vm.loginForm.password)
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
  name: 'loginCtrl',
  fn: loginCtrl
};