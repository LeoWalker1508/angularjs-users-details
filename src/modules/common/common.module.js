
(function() {
  "use strict";

  angular.module("UsersApp.CommonModule", []);

  /**
   * Directives
   */
  angular
    .module("UsersApp.CommonModule")
    .directive("headerComponent", function() {
      return {
        restrict: "E",
        scope: {},
        template: "<h1>Hello</h1>"
      }
    });
})();
