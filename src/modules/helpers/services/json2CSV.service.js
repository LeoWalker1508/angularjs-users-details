(function() {
  "use strict";

  angular.module("UsersApp.Helpers.Json2Csv", []);

  angular.module("UsersApp.Helpers.Json2Csv").service("Json2Csv", Json2Csv);

  function Json2Csv() {
    // Json2Csv JSON data as CSV
    this.download = function(data) {
      if (!data.length) return;

      // Format Data
      let titles = Object.keys(data[0]).join(",") + "\r\n";

      let content = data.map(row => Object.values(row).join(",")).join("\r\n");

      let csv = titles + content;

      // Create CSV file and Download
      let link = document.createElement("a");
      link.id = "lnkDwnldLnk";
      document.body.appendChild(link);

      let blob = new Blob([csv], { type: "text/csv" });
      let csvUrl = window.webkitURL.createObjectURL(blob);
      let filename = "UserExport.csv";
      jQuery("#lnkDwnldLnk").attr({
        download: filename,
        href: csvUrl
      });

      jQuery("#lnkDwnldLnk")[0].click();
      document.body.removeChild(link);
    };
  }
})();
