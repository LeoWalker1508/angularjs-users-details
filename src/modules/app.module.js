require('./user/user.module');
require('./common/common.module');

(function () {
	'use strict';

	angular.module('UsersApp', [
		'ngRoute',
		'UsersApp.UsersModule',
		'UsersApp.CommonModule'
	]);

}());