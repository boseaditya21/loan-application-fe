function registerService(webService, $q, $rootScope) {
  'ngInject';

  const service = {};
  service.register = function(param) {
    var deferObject;
    var promise = webService.post('newUser',param);
    deferObject = deferObject || $q.defer();
    //console.log(promise);
    promise.then(
      function(response) {
        if (response) {
          console.log(response);
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
  return service;

}

export default {
  name: 'registerService',
  fn: registerService
};