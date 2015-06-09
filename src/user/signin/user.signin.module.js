(function () {
	'use strict';

	angular.module('user.signin.module', [])
		.config(['$stateProvider', Configuration]);

	function Configuration ($stateProvider) {
		$stateProvider
			.state('start.signin', {
				url: '/signin',
				views: {
					'content_area@': {
						templateUrl: 'user/signin/templates/user.signin.tmpl.html',
						controller: 'UserSignInController',
						controllerAs: 'signIn_vm'
					}
				}
			});
	}
}) ();