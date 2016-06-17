'use strict';

class SettingsController {

  constructor(Auth) {
    // this.user = {};
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
    this.isLoggedIn = Auth.isLoggedIn;
    // this.$location = $location;
  }

  changePassword(form) {
    this.submitted = true;
    if (form.$valid) {
      this.Auth.changePassword(this.user.oldPassword, this.user.newPassword)
        .then(() => {
          this.message = 'Password successfully changed.';
          this.$location.path('/login');
          // window.location.href = '/home';
        })
        .catch(() => {
          form.password.$setValidity('mongoose', false);
          this.errors.other = 'Incorrect password';
          this.message = '';
        });
    }
  }
}

angular.module('beckmenProjectApp')
  .controller('SettingsController', SettingsController);
