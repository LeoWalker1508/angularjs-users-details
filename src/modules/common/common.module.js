(function() {
  "use strict";

  angular.module("UsersApp.CommonModule", []);

  const Header = require("./header-component/header");
  const Footer = require("./footer-component/footer");

  /**
   * Directives
   */
  angular
    .module("UsersApp.CommonModule")
    .directive("headerComponent", Header.Directive);
  angular
    .module("UsersApp.CommonModule")
    .directive("footerComponent", Footer.Directive);
})();
