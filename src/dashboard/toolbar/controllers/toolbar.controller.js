(function () {
	'use strict';

	angular.module('toolbar.module')
		.controller('toolbarController', ToolbarController);

	ToolbarController.$inject = ['$mdSidenav', '$mdUtil'];

	function ToolbarController($mdSidenav, $mdUtil) {
		var vm = this;

		vm.toggleLeft = buildToggler('left');

		function buildToggler(navID) {
			var debounceFn =  $mdUtil.debounce(function(){
				$mdSidenav(navID)
					.toggle()
					.then(function () {
						console.log("toggle " + navID + " is done");
					});
			},300);
			return debounceFn;
		}
	}
}) ();