(function () {
	'use strict';

	angular.module('menu.module')
		.controller('menuController', menuController);

	menuController.$inject = ['currentUser'];

	function menuController(currentUser) {
		var vm = this;

		vm.user = angular.copy(currentUser.getUser());
	};

}) ();