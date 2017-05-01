function utilService() {
  'ngInject';

  const service = {};
var moment = require('moment');
  service.getTwoDecimalPlaces = function(x){
  var y = parseInt(x*100);
  var z= y/100;
  return z;
}
service.dateFormat = function(variable){
  var finalDate;
  if(!variable)
    finalDate = '';
  else
    //console.log(variable);
    finalDate = moment(variable).format('DD-MM-YYYY');
    return finalDate;
    //console.log(finalDate);
  }
  return service;
  }

export default {
  name: 'utilService',
  fn: utilService
};