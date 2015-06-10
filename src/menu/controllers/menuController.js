(function () {
	'use strict';

	angular.module('menu.module')
		.controller('menuController', menuController);

	menuController.$inject = ['currentUser', '$mdSidenav', '$log', '$mdUtil'];

	function menuController(currentUser, $mdSidenav, $log, $mdUtil) {
		var vm = this;

		vm.user = angular.copy(currentUser.getUser());

		vm.toggleLeft = buildToggler('left');

		function buildToggler(navID) {
			var debounceFn =  $mdUtil.debounce(function(){
				$mdSidenav(navID)
					.toggle()
					.then(function () {
						$log.debug("toggle " + navID + " is done");
					});
			},300);
			return debounceFn;
		}
	};

}) ();