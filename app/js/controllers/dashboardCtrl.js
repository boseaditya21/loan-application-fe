function dashboardCtrl(sharedValues,dashboardService) {
	'ngInject'
	
  // ViewModel
  const vm = this;
  vm.flag=false;

  vm.init=function()
  {
  	console.log(sharedValues.email);
  	var promise=dashboardService.dashboard(sharedValues.email)
  	promise.then(function(answer) {
      console.log(answer);
      if(answer.data=='Empty')
        vm.flag=true;
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
  name: 'dashboardCtrl',
  fn: dashboardCtrl
};