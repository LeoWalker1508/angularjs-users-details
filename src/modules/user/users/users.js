// Directive
function Directive() {
  return {
    restrict: "E",
    scope: {},
    controller: Controller,
    templateUrl: "/modules/user/users/users.view.html"
  };
}

// Controller
Controller.$inject = ["$scope", "UsersAPI"];
function Controller($scope, UsersAPI) {
  $scope.users = [];

  // Initialization
  this.$onInit = function() {
    getUsers();
  };

  function getUsers() {
    UsersAPI.getUsers().then(response => {
      $scope.users = response.data;
    });
  }
}

// Exports
module.exports.Directive = Directive;
module.exports.Controller = Controller;
