'use strict';
(function(){

class PasswordResetComponent {
  constructor() {
    this.initialView = true;
    this.secondView = false;
    this.userList = [];
    this.currentUser;
  }

  changeView(){
    this.initialView = !this.initialView;
    this.secondView = !this.secondView;
  }

  changePassword(form) {
      this.submitted = true;
      if (form.$valid) {

        this.$http.get('/api/users/')
          .then(response => {
            this.userList = response.data;
            this.socket.syncUpdates('user', this.userList);
          });

        for (var i = 0; i < this.userList.length; i++) {
          if (this.user.email == this.userList[i].email) {
            this.currentUser = this.userList[i];
          }
        }

        this.Auth.resetPassword({
            password: this.user.password,
            id: this.currentUser._id
          })
          .then(() => {
            this.$location.path('/login');
          })
          .catch(err => {
            err = err.data;
            this.errors = {};
            // Update validity of form fields that match the mongoose errors
            angular.forEach(err.errors, (error, field) => {
              form[field].$setValidity('mongoose', false);
              this.errors[field] = error.message;
            });
          });
      }
  }
}

angular.module('beckmenProjectApp')
  .component('passwordReset', {
    templateUrl: 'app/passwordReset/passwordReset.html',
    controller: PasswordResetComponent
  });

})();
