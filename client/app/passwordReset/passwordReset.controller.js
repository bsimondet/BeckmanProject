'use strict';
(function(){

class PasswordResetComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('beckmenProjectApp')
  .component('passwordReset', {
    templateUrl: 'app/passwordReset/passwordReset.html',
    controller: PasswordResetComponent
  });

})();
