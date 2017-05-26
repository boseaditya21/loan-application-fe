function sharedValues() {
  'ngInject'

  // ViewModel
    const service = {};

    service.email='';
    service.form1={};
    service.form2={};
    service.form3={};
    service.form4={};
  return service;
  }

export default {
  name: 'sharedValues',
  fn: sharedValues
};
