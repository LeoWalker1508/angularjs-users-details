//Routing
module.exports.Config = function($routeProvider) {
  $routeProvider
    // route for the Dashboard
    .when("/", {
      template: "<dashboard></dashboard>",
      page: {
        title: "Dashboard"
      }
    });
};
