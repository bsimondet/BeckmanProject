'use strict';
(function(){

class MyrouteComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('alienAttack')
  .component('myroute', {
    templateUrl: 'app/myroute/myroute.html',
    controller: MyrouteComponent
  });

})();
