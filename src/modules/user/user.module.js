require("./users.api");
require("./users.data");

(function() {
  "use strict";

  angular.module("UsersApp.UsersModule", ["UsersApp.UsersModule.Api", "UsersApp.UsersModule.Data"]);

  // Components and Angular Imports
  const UserConfig = require("./user.config");
  const UsersComponent = require("./users/users");
  const UserRowComponent = require("./users/user-row/user-row");
  const UserDetailsComponent = require("./users-detials/users-detials");
  const UserShowComponent = require("./users/user-show/user-show");

  // Admin Config
  angular.module("UsersApp.UsersModule").config(UserConfig.Config);

  // Directives
  angular.module("UsersApp.UsersModule").directive("users", UsersComponent.Directive);
  angular.module("UsersApp.UsersModule").directive("userRow", UserRowComponent.Directive);
  angular.module("UsersApp.UsersModule").directive("userDetials", UserDetailsComponent.Directive);
  angular.module("UsersApp.UsersModule").directive("userShow", UserShowComponent.Directive);
})();
