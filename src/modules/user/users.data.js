(function() {
    "use strict";
    angular.module("UsersApp.UsersModule.Data", []);
  
    // Services
    angular.module("UsersApp.UsersModule.Data").service("UsersData", UsersData);
  
    // Services Implementation
    function UsersData() {
      // Users Data
      this.users = [];

      // Show User
      this.shownUser = {};

      // Delete User
      this.deleteUser = function(user_id) {
        this.users = this.users.filter(user => user.id !== user_id);
      }
      
    }
  })();
  