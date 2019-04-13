(function() {
  "use strict";

  angular.module("UsersApp.UsersModule", []);

  // Components and Angular Imports
  const UserConfig = require("./user.config");
  const UsersComponent = require("./users/users");
  const UserDetailsComponent = require("./users-detials/users-detials");

  // Admin Config
  angular
    .module("UsersApp.UsersModule")
    .config(["$routeProvider", UserConfig.Config]);

  // Directives
  angular
    .module("UsersApp.UsersModule")
    .directive("users", UsersComponent.Directive);
  angular
    .module("UsersApp.UsersModule")
    .directive("userDetials", UserDetailsComponent.Directive);
})();
