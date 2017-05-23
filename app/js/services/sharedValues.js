function sharedValues() {
  'ngInject'

  // ViewModel
    const service = {};

    service.email='';
  return service;
  }

export default {
  name: 'sharedValues',
  fn: sharedValues
};
