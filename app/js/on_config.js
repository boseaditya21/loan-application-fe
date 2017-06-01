function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  $locationProvider.html5Mode(true);

  $stateProvider

  .state('Home', {
    url: '/Home',
    controller: 'HomeCtrl as home',
    templateUrl: 'home.html',
    title: 'Home'
  })

  .state('Login', {
    url: '/Login',
    controller: 'loginCtrl as login',
    templateUrl: 'login.html',
    title: 'Login'
  })

  .state('Register',{
    url:'/Register',
    controller:'registerCtrl as register',
    templateUrl:'register.html',
    title:'Register'
  })
  
  .state('forgotPassword',{
    url:'/forgotPassword',
    controller:'forgotPasswordCtrl as forgotPassword',
    templateUrl:'forgotPassword.html',
    title:'Forgot Password'
  })

  .state('dashboard',{
    url:'/dashboard',
    controller:'dashboardCtrl as dashboard',
    templateUrl:'dashboard.html',
    title:'Dashboard'
  })

  .state('profile',{
    url:'/profile',
    controller:'profileCtrl as profile',
    templateUrl:'profile.html',
    title:'Profile'
  })

  .state('updatePersonalDetails',{
    url:'/updatePersonalDetails',
    controller:'updatePersonalDetailsCtrl as updatePersonalDetails',
    templateUrl:'updatePersonalDetails.html',
    title:'Update Personal Details'
  })

  .state('applicationForm1',{
    url:'/applicationForm1',
    controller:'applicationForm1Ctrl as applicationForm1',
    templateUrl:'applicationForm1.html',
    title:'Application Form'
  })

  .state('applicationForm2',{
    url:'/applicationForm2',
    controller:'applicationForm2Ctrl as applicationForm2',
    templateUrl:'applicationForm2.html',
    title:'Application Form'
  })

  .state('applicationForm3',{
    url:'/applicationForm3',
    controller:'applicationForm3Ctrl as applicationForm3',
    templateUrl:'applicationForm3.html',
    title:'Application Form'
  })

  .state('applicationForm4',{
    url:'/applicationForm4',
    controller:'applicationForm4Ctrl as applicationForm4',
    templateUrl:'applicationForm4.html',
    title:'Application Form'
  })

  .state('congratulations',{
    url:'/congratulations',
    controller:'congratulationsCtrl as congratulations',
    templateUrl:'congratulations.html',
    title:'congratulations'
  });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
