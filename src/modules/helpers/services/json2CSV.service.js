(function() {
  "use strict";

  angular.module("UsersApp.Helpers.Json2CSV", []);

  angular.module("UsersApp.Helpers.Json2CSV").service("Json2CSV", Json2CSV);

  function Json2CSV() {
    // Download JSON data as CSV
    this.download = function(data) {
      console.log(data);
    };
  }
})();
