(function() {
  "use strict";

  angular.module("UsersApp.AdminModule", []);

  // Components and Angular Imports
  const AdminConfig = require("./admin.config");
  const Dashboard = require("./dashboard/dashboard");

  // Admin Config
  angular
    .module("UsersApp.AdminModule")
    .config(["$routeProvider", AdminConfig.Config]);
  // Directives
  angular
    .module("UsersApp.AdminModule")
    .directive("dashboard", Dashboard.Directive);
})();
