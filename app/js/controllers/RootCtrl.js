function RootCtrl(LoginService, $rootScope, $cookies, $state,sharedValues,$mdSidenav) {
  'ngInject'

  // ViewModel
  const vm = this;

  vm.registerFlag=false;
  //vm.active='';

  vm.init = function() {
    var login = LoginService.apiLogin();
    login.then(function(answer){
      console.log('Success',answer);
    },
    function(reason){
      console.log('Failed',reason);
    })
    $rootScope.accessToken=$cookies.get('token');
    if($rootScope.accessToken==null)
    {
      $state.go('login');  
    }
    else{
      var param=$cookies.get('accountID');
      vm.invOrBorCheck(param);
    }
  }



  vm.invOrBorCheck=function(param){
    var promise=LoginService.check(param);
    promise.then(function(answer){
      if(answer && answer.data.success == true){
        console.log('response got but root:',answer);
        sharedValues.checkInvestor=answer.data.message[0].loan__investor__c;
        sharedValues.checkBorrower=answer.data.message[0].loan__borrower__c;

        $rootScope.rootInvestorFlag=sharedValues.checkInvestor;
        $rootScope.rootBorrowerFlag=sharedValues.checkBorrower;

        if($cookies.get('cookiesCurrentUserAs') === 'investor'){
          $rootScope.rootCurrentUserAs='investor';
          console.log('root:',window.location.href);
          if(window.location.href === 'https://localhost:3000/' && $rootScope.rootBorrowerFlag == false && $rootScope.rootInvestorFlag == true){
            $rootScope.rootCurrentUserAs='investor';
            $cookies.put('cookiesCurrentUserAs', 'investor');
            $state.go('myLoanPortfolio');
            
          }
          else if(window.location.href === 'https://localhost:3000/'){
            $rootScope.rootCurrentUserAs='borrower';
            $cookies.put('cookiesCurrentUserAs', 'borrower');
            $state.go('borrowerAppliedLoans');
          }
        }
        else if($cookies.get('cookiesCurrentUserAs') === 'borrower'){
          $rootScope.rootCurrentUserAs='borrower';
          if(window.location.href === 'https://localhost:3000/' ){
            $cookies.put('cookiesCurrentUserAs', 'borrower');
            $state.go('borrowerAppliedLoans');
          }
        }   
      }
      else{
        $rootScope.accessToken = null;
        $rootScope.rootInvestorFlag=null;
        $rootScope.rootBorrowerFlag=null;
        $rootScope.rootCurrentUserAs=null;
        $cookies.remove('accountID');
        $cookies.remove('token');
        $cookies.remove('cookiesCurrentUserAs');
        $state.go('login');
      }
    },
    function(reason) {
        var err = reason;
        console.log(err);
        alert('Something went wrong');
      });
  }




  vm.stateInvToBorOrBorToInv = function(stateToGo){
    if(stateToGo === 'investor'){
      $cookies.put('cookiesCurrentUserAs','investor');
      $rootScope.rootCurrentUserAs='investor'
      $state.go('myLoanPortfolio');
    }
    else if(stateToGo === 'borrower'){
      $cookies.put('cookiesCurrentUserAs','borrower');
      $rootScope.rootCurrentUserAs='borrower';
      $state.go('borrowerAppliedLoans');
    }
  }


  vm.openSidenav = function(){
     $mdSidenav('left').toggle();
  }
  vm.closeSidenav = function(){
    $mdSidenav('left').toggle();
  }

  vm.goHomePage = function(){
    $state.go('Home');
  }

  vm.goLoginPage = function(){
    $state.go('login');
  }

  vm.goRegisterPage = function(){
    $state.go('register');
  }


  vm.logOut = function() {

    vm.registerFlag=false;

    $rootScope.accessToken = null;
    $rootScope.rootInvestorFlag=null;
    $rootScope.rootBorrowerFlag=null;
    $rootScope.rootCurrentUserAs=null;

    $cookies.remove('accountID');
    $cookies.remove('token');
    $cookies.remove('cookiesCurrentUserAs');

    $state.go('login');
  }

  vm.init();

}

export default {
  name: 'RootCtrl',
  fn: RootCtrl
};