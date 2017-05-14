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
  });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
