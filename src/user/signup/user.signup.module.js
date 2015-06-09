(function () {
	'use strict';

	angular.module('user.signup.module', [])
		.config(['$stateProvider', Configuration]);

	function Configuration ($stateProvider) {
		$stateProvider
			.state('start.signup', {
				url: '/signup',
				views: {
					'content_area@': {
						templateUrl: 'user/signup/templates/user.signup.tmpl.html',
						controller: 'UserSignUpController',
						controllerAs: 'signUp_vm'
					}
				}
			});
	}
}) ();