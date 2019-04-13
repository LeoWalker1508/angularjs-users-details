(function () {
	'use strict';

	angular.module('UsersApp', [
		'ui.router',

		'user',		
		'common',
		
		'ui.bootstrap'
	]);	


	angular.module('UsersApp').directive('accountTransactionsContainer', accountTransactionsContainerDirective);


	function accountTransactionsContainerDirective() {
        return {
            restrict: "E",
            scope: {},
            templateUrl: "/modules/user/users.view.html"
        };
    }

}());