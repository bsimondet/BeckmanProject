'use strict';
(function(){

class PacmanComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('beckmenProjectApp')
  .component('pacman', {
    templateUrl: 'app/pacman/pacman.html',
    controller: PacmanComponent
  });

})();
