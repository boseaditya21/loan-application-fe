function dashboardCtrl(sharedValues,dashboardService) {
	'ngInject'
	
  // ViewModel
  const vm = this;
  vm.flag=false;
  vm.id='';
  vm.purpose='';
  vm.status='';

  vm.init=function()
  {
  	console.log(sharedValues.email);
  	var promise=dashboardService.dashboard(sharedValues.email)
  	promise.then(function(answer) {
      console.log(answer);
      if(answer.status==200 && answer.statusText=='OK' && answer.data!='Empty')
      {
        vm.id=answer.data.details.id;
        vm.purpose=answer.data.details.loanPurpose;
        vm.status=answer.data.details.status;
      }

      else if(answer.data=='Empty')
      {
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

  vm.init();

  }

export default {
  name: 'dashboardCtrl',
  fn: dashboardCtrl
};