'use strict';
(function(){

class HappyFunTimeComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('beckmenProjectApp')
  .component('happyFunTime', {
    templateUrl: 'app/happyFunTime/happyFunTime.html',
    controller: HappyFunTimeComponent
  });

})();
