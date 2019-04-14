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

    // Get User By Id
    this.getUserById = function(user_id) {
      // This would be replaced by a single endpoint to get a single user
      // but I here got all the users then I filter to mock the same behavior

      return $http({
        method: "GET",
        url: "/assets/data/users.json",
        data: {
          id: user_id
        },
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function(response) {
        response.data = response.data.find(user => user.id == user_id);
        return response;
      });
    };
  }
})();
