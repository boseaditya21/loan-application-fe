function LoginService(webService, $q, $rootScope) {
  'ngInject';

  const service = {};
  service.apiLogin = function() {
    var deferObject;
    var promise = webService.get('loginDB');
    deferObject = deferObject || $q.defer();
    //console.log(promise);
    promise.then(
      function(response) {
        if (response) {
          //console.log(response);
          deferObject.resolve(response);
        } else {
          deferObject.reject(response);
        }
      },
      function(reason) {
      deferObject.reject(reason);
    });
    

    return deferObject.promise;
  };

  service.userLogin = function(param) {
    var deferObject;
    var promise = webService.post('authenticate', param);
    deferObject = deferObject || $q.defer();
    promise.then(
      function(response) {
        console.log(response);
        if (response && response.data.success) {
          $rootScope.accessToken = response.data.token;
          deferObject.resolve(response);
        } else {
          if (response && response.data.message) {
            deferObject.reject(response.data.message);
          } else {
            deferObject.reject(response);
          }
        }
      },
      function(reason) {
      deferObject.reject(reason);
    });

    return deferObject.promise;
  };

  return service;

}

export default {
  name: 'LoginService',
  fn: LoginService
};