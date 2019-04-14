// Directive
function Directive() {
  return {
    restrict: "EA",
    scope: {
      user: "="
    },
    controller: Controller,
    templateUrl: "/modules/user/users/user-row/user-row.view.html"
  };
}

// Controller
function Controller() {}

module.exports.Directive = Directive;
module.exports.Controller = Controller;
