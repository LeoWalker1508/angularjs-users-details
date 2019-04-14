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
Controller.$inject = ["$scope", "UsersData"];
function Controller($scope, UsersData) {
  $scope.users = [];
  $scope.currentPage = 0;
  $scope.getUsersPage = getUsersPage;
  $scope.previousPage = previousPage;
  $scope.nextPage = nextPage;
  $scope.isLastPage = isLastPage;
  $scope.isUserSelected = isUserSelected;
  $scope.deleteSelected = deleteSelected;
  $scope.downloadSelected = downloadSelected;

  const RowPerPage = 10;

  // Initialization
  this.$onInit = function() {
    getUsers();
  };

  // Get the Users from the API
  function getUsers() {
    UsersData.getUsers();
  }

  // Get the records for the current page
  function getUsersPage() {
    return UsersData.users.slice($scope.currentPage * RowPerPage, $scope.currentPage * RowPerPage + RowPerPage);
  }

  // Previous Page
  function previousPage() {
    let lastPageNumber = Math.ceil(UsersData.users.length / RowPerPage);
    $scope.currentPage = $scope.currentPage === 0 ? $scope.currentPage : $scope.currentPage - 1;
  }

  // Next Page
  function nextPage() {
    let lastPageNumber = Math.ceil(UsersData.users.length / RowPerPage);
    $scope.currentPage = isLastPage() ? $scope.currentPage : $scope.currentPage + 1;
  }

  // Chech if this is the last page
  function isLastPage() {
    let lastPageNumber = Math.ceil(UsersData.users.length / RowPerPage);
    return $scope.currentPage === lastPageNumber - 1;
  }

  // Check if any user are selected
  function isUserSelected() {
    return !!UsersData.users.find(user => user.selected);
  }

  // Get Selected Users
  function getSelectedUsers() {
    return UsersData.users.filter(user => user.selected);
  }

  //Delete Selected Rows
  function deleteSelected() {
    UsersData.patchDelete(getSelectedUsers());
  }

  // Download Selected Rows
  function downloadSelected() {
    
  }
  
}

// Exports
module.exports.Directive = Directive;
module.exports.Controller = Controller;
