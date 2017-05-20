function forgotPasswordService(webService, $q, $rootScope) {
  'ngInject';

  const service = {};
  
  service.submit = function(param) {
    var deferObject;
    var promise = webService.post('fetchSecurityQuestion', param);
    console.log(param);
    deferObject = deferObject || $q.defer();
    promise.then(
      function(response) {
        console.log(response);
        if (response && response.status==200 && response.statusText=='OK') {
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

  service.check = function(param) {
    var deferObject;
    var promise = webService.post('checkSecurityAnswer', param);
    console.log(param);
    deferObject = deferObject || $q.defer();
    promise.then(
      function(response) {
        //console.log(response);
        if (response && response.status==200 && response.statusText=='OK') {
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
  name: 'forgotPasswordService',
  fn: forgotPasswordService
};