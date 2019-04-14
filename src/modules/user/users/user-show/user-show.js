// Directive
function Directive() {
  return {
    restrict: "E",
    scope: {},
    controller: Controller,
    templateUrl: "/modules/user/users/user-show/user-show.view.html"
  };
}

// Controller
Controller.$inject = ["$scope", "UsersData"];
function Controller($scope, UsersData) {
  $scope.UserData = UsersData;
  $scope.calculateAge = calculateAge;

  // Calculates User Age
  function calculateAge() {
    if (!$scope.UserData.shownUser.dateOfBirth) return 0;

    let birthDate = new Date($scope.UserData.shownUser.dateOfBirth);
    let now = new Date();
    let diff = now.getFullYear() - birthDate.getFullYear();
    return Math.ceil(diff);
  }
}

module.exports.Directive = Directive;
module.exports.Controller = Controller;
