// Directive
function Directive() {
  return {
    restrict: "EA",
    scope: {
      user: "="
    },
    controller: Controller,
    templateUrl: "/modules/user/users/user-row/user-row.view.html"
  };
}

// Controller
Controller.$inject = ["$scope", "UsersData"];
function Controller($scope, UsersData) {
  $scope.showUser = showUser;
  $scope.deleteUser = deleteUser;

  // Show User Data
  function showUser() {
    UsersData.shownUser = $scope.user;
    jQuery("#userDetailsModal").modal("show");
  }

  // Delete User
  function deleteUser() {
    UsersData.deleteUser($scope.user.id);
  }
}

module.exports.Directive = Directive;
module.exports.Controller = Controller;
