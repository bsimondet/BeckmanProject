'use strict';

class NavbarController {
  //end-non-standard

  //start-non-standard
  constructor($location, Auth) {
    this.$location = $location;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.menu = [{
      title: "About",
      link: "/aboutPage"
    }, {
      title: "Pacman",
      link: "/pacman"
    }, {
      title: "Tetris",
      link: "/tetris"
    }]
  }

  isActive(route) {
    return route === this.$location.path();
  }
}

angular.module('beckmenProjectApp')
  .controller('NavbarController', NavbarController);
