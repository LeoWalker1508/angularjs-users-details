(function() {
  "use strict";
  angular.module("UsersApp.UsersModule.Data", ["UsersApp.UsersModule.Api"]);

  // Services
  angular.module("UsersApp.UsersModule.Data").service("UsersData", UsersData);

  // Services Implementation
  UsersData.$inject = ["$q", "UsersAPI"];
  function UsersData($q, UsersAPI) {
    // Users Data
    this.users = [];

    // Show User
    this.shownUser = {};

    // Get the Users
    this.getUsers = function() {
      // If there are users, return them
      if (this.users.length) {
        return $q.resolve({
          data: this.users
        });
      }

      // Get Users if no users were found
      return UsersAPI.getUsers().then(response => {
        this.users = response.data;
        return response;
      });
    };

    // Get User by Id
    this.getUserById = function(user_id) {
      return this.getUsers().then(function(response) {
        response.data = response.data.find(user => user.id == user_id);
        return response;
      });
    };

    // Save User
    this.saveUser = function(newUser) {
      for (let userIndex in this.users) {
        if (this.users[userIndex].id === newUser.id) {
          this.users[userIndex] = newUser;
          break;
        }
      }
    };

    // Delete User
    this.deleteUser = function(user_id) {
      this.users = this.users.filter(user => user.id !== user_id);
    };

    // Delete Multiple users once
    this.patchDelete = function(users) {
      let user_ids = users.map(user => user.id);
      this.users = this.users.filter(user => !user_ids.includes(user.id));
    }
  }
})();
