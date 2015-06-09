(function () {
	'use strict';

	angular.module('dashboard.module', ['menu.module'])
		.config(['$stateProvider', Configuration]);

	function Configuration($stateProvider) {
		//console.log('run config in dashboard');
		$stateProvider
			.state('app', {
				abstract: true,
				data: {
					requireLogin: true
				}
			})
			.state('app.home', {
				url: '/home',
				views: {
					'menu_area@': {
						templateUrl: 'menu/templates/menu.tmpl.html',
						controller: 'menuController',
						controllerAs: 'menu_vm'
					},
					'content_area@': {
						templateUrl: 'dummy_pages/page_one.tmpl.html'
					}
				}
			})
			.state('app.home.second', {
				url: '/second',
				views: {
					'content_area@': {
						templateUrl: 'dummy_pages/page_two.tmpl.html'
					}
				}
			});

	}
}) ();