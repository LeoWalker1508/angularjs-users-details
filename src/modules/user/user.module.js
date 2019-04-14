require("./users.api");

(function() {
  "use strict";

  angular.module("UsersApp.UsersModule", ["UsersApp.UsersModule.Api"]);

  // Components and Angular Imports
  const UserConfig = require("./user.config");
  const UsersComponent = require("./users/users");
  const UserDetailsComponent = require("./users-detials/users-detials");

  // Admin Config
  angular.module("UsersApp.UsersModule").config(UserConfig.Config);

  // Directives
  angular.module("UsersApp.UsersModule").directive("users", UsersComponent.Directive);
  angular.module("UsersApp.UsersModule").directive("userDetials", UserDetailsComponent.Directive);
})();
