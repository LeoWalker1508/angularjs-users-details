//Routing
module.exports.Config = [
  "$routeProvider",
  function($routeProvider) {
    $routeProvider
      // route for the Dashboard
      .when("/users", {
        template: "<users></users>",
        page: {
          title: "Users"
        }
      })
      .when("/users/:id", {
        template: "<user-detials></user-detials>",
        page: {
          title: "User Details"
        }
      });
  }
];
