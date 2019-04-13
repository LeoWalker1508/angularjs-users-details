require('./admin/admin.module');
require('./user/user.module');
require('./common/common.module');

(function () {
	'use strict';

	angular.module('UsersApp', [
		'ngRoute',
		'UsersApp.Partials',
		'UsersApp.AdminModule',
		'UsersApp.UsersModule',
		'UsersApp.CommonModule'
	]);

	// Components and Angular Imports
	const App = require('./app/app');

	// Directives
	angular.module('UsersApp').directive('app', App.Directive);


}());