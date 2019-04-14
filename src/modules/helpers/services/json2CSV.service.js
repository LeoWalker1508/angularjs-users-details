(function() {
  "use strict";

  angular.module("UsersApp.Helpers.Json2Csv", []);

  angular.module("UsersApp.Helpers.Json2Csv").service("Json2Csv", Json2Csv);

  function Json2Csv() {
    // Json2Csv JSON data as CSV
    this.download = function(data) {
      console.log(data);
    };
  }
})();
