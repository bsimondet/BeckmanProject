'use strict';
(function(){

class NewPasswordComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('beckmenProjectApp')
  .component('newPassword', {
    templateUrl: 'app/newPassword/newPassword.html',
    controller: NewPasswordComponent
  });

})();
