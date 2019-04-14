// Directive
function Directive() {
  return {
    restrict: "E",
    scope: {},
    controller: Controller,
    templateUrl: "/modules/user/users-detials/users-detials.view.html"
  };
}

// Controller
Controller.$inject = ["$scope", "$routeParams", "$location", "UsersData", "UsersAPI"];
function Controller($scope, $routeParams, $location, UsersData, UsersAPI) {
  $scope.user = {};
  $scope.saveUser = saveUser;
  $scope.checkEdits = checkEdits;
  $scope.cancelEdits = cancelEdits;

  this.$onInit = function() {
    UsersAPI.getUserById($routeParams.id).then(function(response) {
      $scope.user = response.data;
    });
  };

  // Save User
  function saveUser() {}

  // Cancel Edits
  function checkEdits() {
    if ($scope.editUser.$dirty) {
      jQuery("#cancelUserEdit").modal("show");
    }
  }

  // Cancel Edits
  function cancelEdits() {
    jQuery("#cancelUserEdit").modal("hide");
    $location.url('/users');
  }
}

module.exports.Directive = Directive;
module.exports.Controller = Controller;
