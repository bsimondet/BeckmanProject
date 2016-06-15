'use strict';

class SignupController {
  //end-non-standard

  constructor(Auth, $location, $http, socket) {
      this.Auth = Auth;
      this.$location = $location;
      this.schoolList = [];
      this.$http = $http;
      this.socket = socket;
      this.schoolSelected = "Select Your School";
      this.$http.get('/api/Schools/')
        .then(response => {
          this.schoolList = response.data;
          this.socket.syncUpdates('School', this.schoolList);
        });
    }

    selectSchool(school) {
      this.schoolSelected = school;
    }


  register(form) {
    this.submitted = true;
    // if(this.schoolSelected == "Select Your School") {
    //   alert("Please select your school");
    //   break;
    // }
    if (form.$valid) {
      this.Auth.createUser({
          firstname: this.user.firstname,
          lastname: this.user.lastname,
          email: this.user.email,
          password: this.user.password,
          school: this.user.schoolName
        })
        .then(() => {
          // Account created, redirect to home
          this.$location.path('/');
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
  .controller('SignupController', SignupController);
