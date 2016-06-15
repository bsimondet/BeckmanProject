'use strict';
(function(){

class TetrisComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('beckmenProjectApp')
  .component('tetris', {
    templateUrl: 'app/tetris/tetris.html',
    controller: TetrisComponent
  });

})();
