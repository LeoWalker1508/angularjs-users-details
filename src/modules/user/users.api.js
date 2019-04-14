(function() {
  "use strict";
  angular.module("UsersApp.UsersModule.Api", []);

  // Services
  angular.module("UsersApp.UsersModule.Api").service("UsersAPI", UsersAPI);

  // Services Implementation
  UsersAPI.$inject = ["$http"];
  function UsersAPI($http) {
    // Get Users Data
    this.getUsers = function() {
      return $http({
        method: "GET",
        url: "/assets/data/users.json",
        headers: {
          "Content-Type": "application/json"
        }
      });
    };
  }
})();
