function congratulationsCtrl($state) {
	'ngInject'
	
  // ViewModel
  const vm = this;

  vm.goBackToDashboard=function()
  {
  	$state.go('dashboard');
  }
  }

export default {
  name: 'congratulationsCtrl',
  fn: congratulationsCtrl
};