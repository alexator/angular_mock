(function () {
	'use strict';

	angular.module('sidenav.module')
		.controller('sidenavController', SidenavController);

	SidenavController.$inject = ['$window', 'currentUser', '$state', '$mdSidenav'];

	function SidenavController($window, currentUser, $state, $mdSidenav) {

		var vm = this;
		vm.user = angular.copy(currentUser.getUser());
		vm.dynamicHeight = dynamicHeight;

		//TODO refactor the navigation functionality to become DRY
		vm.nav_one = nav_one;
		vm.nav_two = nav_two;
		vm.nav_three = nav_three;

		vm.signOut = signOut;
		vm.close = close;

		function close() {
			$mdSidenav('left').close();
		}

		function signOut() {
			currentUser.setCurrentUser(null);
			$state.go('start.welcome');
			close();
		}


		function nav_one() {
			$state.go('app.home');
			close();
		}

		function nav_two() {
			$state.go('app.home.second');
			close();
		}

		function nav_three() {
			$state.go('app.home.three');
			close();
		}


		function dynamicHeight() {
			var height;

			height = $window.innerHeight;

			return 'height: ' + height + 'px;'
		}
	}
}) ();