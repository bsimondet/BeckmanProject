'use strict';
(function(){

class PasswordResetComponent {
  constructor() {
    this.message = 'Hello';
    this.initialView = true;
    this.secondView = false;
  }
  changeView(){
    this.initialView = !this.initialView;
    this.secondView = !this.secondView;
  }


}

angular.module('beckmenProjectApp')
  .component('passwordReset', {
    templateUrl: 'app/passwordReset/passwordReset.html',
    controller: PasswordResetComponent
  });

})();
