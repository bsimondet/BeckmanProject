'use strict';
(function(){

class AboutPageComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('beckmenProjectApp')
  .component('aboutPage', {
    templateUrl: 'app/aboutPage/aboutPage.html',
    controller: AboutPageComponent
  });

})();
