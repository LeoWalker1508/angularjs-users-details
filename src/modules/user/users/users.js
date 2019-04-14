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
  $scope.currentPage = 0;
  $scope.lastPageNumber = 0;
  $scope.getUsersPage = getUsersPage;
  $scope.previousPage = previousPage;
  $scope.nextPage = nextPage;

  const RowPerPage = 10;

  // Initialization
  this.$onInit = function() {
    getUsers();
  };

  // Get the Users from the API
  function getUsers() {
    UsersAPI.getUsers().then(response => {
      $scope.users = response.data;
      $scope.lastPageNumber = Math.ceil($scope.users.length / RowPerPage);
    });
  }

  // Get the records for the current page
  function getUsersPage() {
    return $scope.users.slice($scope.currentPage * RowPerPage, $scope.currentPage * RowPerPage + RowPerPage);
  }

  // Previous Page
  function previousPage() {
    $scope.currentPage = $scope.currentPage === 0 ? $scope.currentPage : $scope.currentPage - 1;
  }

  // Next Page
  function nextPage() {
    $scope.currentPage = $scope.currentPage === $scope.lastPageNumber - 1 ? $scope.currentPage : $scope.currentPage + 1;
  }
}

// Exports
module.exports.Directive = Directive;
module.exports.Controller = Controller;
