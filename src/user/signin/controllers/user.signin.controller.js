(function () {
	'use strict';

	angular.module('user.signin.module')
		.controller('UserSignInController', UserSignInController);

	/* @ngInject */
	UserSignInController.$inject = ['currentUser', '$state'];

	function UserSignInController (currentUser, $state) {
		var vm = this;
		vm.user = null;

		vm.signIn = function() {
			currentUser.setCurrentUser(vm.user);
			$state.go('app.home');
		}
	}
}) ();