(function () {
	'use strict';

	angular.module('dashboard.module', ['sidenav.module', 'toolbar.module'])
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
					'sidenav_area@': {
						templateUrl: 'dashboard/sidenav/templates/sidenav.tmpl.html',
						controller: 'sidenavController',
						controllerAs: 'sidenav_vm'
					},
					'toolbar_area@': {
						templateUrl: 'dashboard/toolbar/templates/toolbar.tmpl.html',
						controller: 'toolbarController',
						controllerAs: 'toolbar_vm'
					},
					'content_area@': {
						templateUrl: 'dummy_pages/page_one.tmpl.html'
					}
				}
			})
			.state('app.home.second', {
				url: '/one',
				views: {
					'content_area@': {
						templateUrl: 'dummy_pages/page_two.tmpl.html'
					}
				}
			})
			.state('app.home.three', {
				url: '/two',
				views: {
					'content_area@': {
						templateUrl: 'dummy_pages/page_three.tmpl.html'
					}
				}
			});

	}
}) ();