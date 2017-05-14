function RootCtrl(LoginService,$cookies, $rootScope, $state,sharedValues) {
  'ngInject'
  
  const vm = this;
  vm.status='';

  vm.init = function() {
    var login = LoginService.apiLogin();
    login.then(function(answer){
    console.log('Success',answer);
    },
    function(reason){
      console.log('Failed',reason);
    })
  }

  vm.logOut = function() {
    $rootScope.accessToken = null;
    $cookies.remove('accountID');
    $cookies.remove('token');
    $state.go('Home');
  }

  vm.init();

}

export default {
  name: 'RootCtrl',
  fn: RootCtrl
};