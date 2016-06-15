'use strict';
(function(){

class HomeComponent {
  constructor(Auth, $http, socket) {
    this.Auth = Auth;
        this.$http = $http;
        this.socket = socket;
        this.getCurrentUser = Auth.getCurrentUser();
        this.schoolList = [];
        this.leaderboard = [];

        this.$http.get('/api/Schools/')
          .then(response => {
            this.schoolList = response.data;
            this.selectedSchool = this.getCurrentUser.schoolName;
            for (var i = 0; i < this.schoolList.length; i++) {
              if (this.schoolList[i].name == this.selectedSchool) {
                this.leaderboard = this.schoolList[i].leaderboard;
              }
            }
            this.socket.syncUpdates('School', this.schoolList);
        });
      }
}

angular.module('beckmenProjectApp')
  .component('home', {
    templateUrl: 'app/home/home.html',
    controller: HomeComponent
  });

})();
