(function() {
    "use strict";
    angular.module("UsersApp.UsersModule.Data", []);
  
    // Services
    angular.module("UsersApp.UsersModule.Data").service("UsersData", UsersData);
  
    // Services Implementation
    function UsersData() {
      // Users Data
      this.users = [];
      
    }
  })();
  