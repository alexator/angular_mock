(function () {
	'use strict';

	angular.module('sampleApp')
		.factory('currentUser', CurrentUser);


	function CurrentUser() {
		var currentUserData = null;

		return {
			getUser: getUser,
			setCurrentUser: setCurrentUser
		};

		function getUser() {
			return currentUserData;
		}

		function setCurrentUser(data) {
			currentUserData = angular.copy(data);
		}
	}
}) ();