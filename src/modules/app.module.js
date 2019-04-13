require('./user/user.module');
require('./common/common.module');

(function () {
	'use strict';

	angular.module('UsersApp', [
		'ngRoute',
		'UsersApp.Partials',
		'UsersApp.UsersModule',
		'UsersApp.CommonModule'
	]);

	const App = require('./app/app');

	// Directives
	angular.module('UsersApp').directive('app', App.Directive);


}());