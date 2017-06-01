function HomeCtrl($state) {
	'ngInject'
	
  // ViewModel
  const vm = this;

  vm.principal=50000;
  vm.rate=11.9;
  vm.emi=0;
  vm.totalRepaymentAmount=0;
  vm.tenure=36;

  vm.init=function()
  {
    console.log(vm.tenure);
  	//vm.emi=[vm.principal x (11.9/100) x (1+(11.9/100)^vm.tenure]/[(1+(11.9/100))^vm.tenure-1]
  	vm.emi1=vm.principal*0.119;
  	vm.emi2=Math.pow(1.119,vm.tenure);
  	vm.emi3=Math.pow(1.119,(vm.tenure-1));
  	vm.emi=(vm.emi1*vm.emi2)/(vm.emi3);
  	vm.totalRepaymentAmount=vm.principal+vm.emi;
  }

  vm.calculate=function()
  {
    console.log(vm.tenure);
  	vm.emi1=vm.principal*0.119;
  	vm.emi2=Math.pow(1.119,vm.tenure);
  	vm.emi3=Math.pow(1.119,(vm.tenure-1));
  	vm.emi=(vm.emi1*vm.emi2)/(vm.emi3);
  	vm.totalRepaymentAmount=vm.principal+vm.emi;
  }

  vm.applyNow=function()
  {
  	$state.go('Login');
  }

  vm.init();

  }

export default {
  name: 'HomeCtrl',
  fn: HomeCtrl
};