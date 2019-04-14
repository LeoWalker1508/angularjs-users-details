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
Controller.$inject = ["$scope", "$location", "UsersData"];
function Controller($scope, $location, UsersData) {
  $scope.showUser = showUser;
  $scope.editUser = editUser;
  $scope.deleteUser = deleteUser;

  // Show User Data
  function showUser() {
    UsersData.shownUser = $scope.user;
    jQuery("#userDetailsModal").modal("show");
  }

  // Edit User
  function editUser() {
    $location.url("/users/" + $scope.user.id);
  }

  // Delete User
  function deleteUser() {
    UsersData.deleteUser($scope.user.id);
  }
}

module.exports.Directive = Directive;
module.exports.Controller = Controller;
