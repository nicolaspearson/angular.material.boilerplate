(function() {
	'use strict';

	angular
		.module('app.layout')
		.controller('AppSidenavRightCtrl', ['$scope', AppSidenavRightCtrl]);

	function AppSidenavRightCtrl($scope) {
		var imagePath = 'assets/images/g1.jpg';
		$scope.messages = [
			{
				face: 'assets/images-demo/avatars/1.jpg',
				who: 'Jason Bourne',
				notes: 'Hi there'
			},
			{
				face: 'assets/images-demo/avatars/2.jpg',
				who: 'Bella Doe',
				notes: 'Hi there'
			},
			{
				face: 'assets/images-demo/avatars/3.jpg',
				who: 'Min Chan',
				notes: 'Hi there'
			},
			{
				face: 'assets/images-demo/avatars/4.jpg',
				who: 'Sophia Doe',
				notes: 'Hi there'
			},
			{
				face: 'assets/images-demo/avatars/5.jpg',
				who: 'Luna Doe',
				notes: 'Hi there'
			}
		];

		$scope.notifications = [
			{
				icon: 'mail_outline',
				what: 'New mail arrived',
				detail: 'Hey, David here, may I ask....'
			},
			{
				icon: 'people_outline',
				what: 'New member joined',
				detail: 'Bella Doe joined the group'
			},
			{
				icon: 'chat_bubble_outline',
				what: 'Message from Jane',
				detail: 'Hi, just want to ask how about...'
			},
			{
				icon: 'label_outline',
				what: 'Label added',
				detail: 'New label has been added successfully'
			},
			{
				icon: 'info_outline',
				what: 'App updated',
				detail:
					'Congrats, all dependencies have been upgraded to latest version'
			}
		];
	}
})();
