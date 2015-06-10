(function () {
	'use strict';

	angular.module('sampleApp', [
		'ui.router',
		'ngMaterial',
		'ngMessages',
		'user.signin.module',
		'user.signup.module',
		'dashboard.module'
	])
		.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', Configuration])
		.run(['$rootScope', '$state', 'currentUser', function ($rootScope, $state, currentUser) {
			$rootScope.$on('$stateChangeStart', function (event, toState) {
				var requireLogin = false;

				if(angular.isDefined(toState.data)) {

					requireLogin = toState.data.requireLogin;


					if (requireLogin && !currentUser.getUser ()) {
						event.preventDefault ();
						$state.go ('start.signin');
					}
					if (!requireLogin && currentUser.getUser ()) {
						event.preventDefault ();
						$state.go ('app.home');
					}
				}
			});

		}]);

	function Configuration($stateProvider, $urlRouterProvider, $locationProvider) {
		//console.log('hello from config one');
		$locationProvider.html5Mode(true);

		$stateProvider
			.state('start', {
				abstract: true,
				data: {
					requireLogin: false
				}
			})
			.state('start.welcome', {
				url: '/welcome',
				views: {
					'content_area@': {
						templateUrl: 'layout/home.greetings.template.html'
					}
				}
			})
			.state('generic', {
				abstract: true,
			})
			.state('generic.404', {
				url: '/404',
				views: {
					'content_area@': {
						templateUrl: 'layout/404.template.html'
					}
				}
			});

		$urlRouterProvider.when('/', '/welcome')
			.otherwise('/404');
	}

}) ();