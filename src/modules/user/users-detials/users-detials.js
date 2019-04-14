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
Controller.$inject = ["$scope", "$routeParams", "UsersData", "UsersAPI"];
function Controller($scope, $routeParams, UsersData, UsersAPI) {
  $scope.user = {};

  this.$onInit = function() {
    UsersAPI.getUserById($routeParams.id).then(function(response) {
      $scope.user = response.data;
    })
  };
}

module.exports.Directive = Directive;
module.exports.Controller = Controller;
