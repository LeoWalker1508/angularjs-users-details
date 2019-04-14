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
Controller.$inject = ["$scope", "$routeParams", "$location", "UsersData"];
function Controller($scope, $routeParams, $location, UsersData) {
  $scope.user = {};
  $scope.saveUser = saveUser;
  $scope.checkEdits = checkEdits;
  $scope.cancelEdits = cancelEdits;

  this.$onInit = function() {
    UsersData.getUserById($routeParams.id).then(function(response) {
      $scope.user = Object.assign({}, response.data);
    });
  };

  // Save User
  function saveUser() {
    UsersData.saveUser($scope.user);
    $location.url("/users");
  }

  // Cancel Edits
  function checkEdits() {
    if ($scope.editUser.$dirty) {
      jQuery("#cancelUserEdit").modal("show");
    }
  }

  // Cancel Edits
  function cancelEdits() {
    jQuery("#cancelUserEdit").modal("hide");
    $location.url("/users");
  }
}

module.exports.Directive = Directive;
module.exports.Controller = Controller;
