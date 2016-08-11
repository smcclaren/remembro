angular.module('firebase.config', [])
  .constant('FBURL', 'https://remembro-3eb52.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','facebook'])

  .constant('loginRedirectPath', '/login');
