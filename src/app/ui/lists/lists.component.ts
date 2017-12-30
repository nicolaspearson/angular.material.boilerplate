import { Component } from '@angular/core';

@Component({
	selector: 'app-ui-lists',
	styles: [],
	templateUrl: './lists.component.html'
})
export class UIListsComponent {
	messages = [
		{
			avatar: 'assets/images-demo/avatars/1.jpg',
			from: 'Min Li Chan',
			subject: 'Brunch this weekend?',
			content: "I'll be in your neighborhood doing errands"
		},
		{
			avatar: 'assets/images-demo/avatars/2.jpg',
			from: 'Bella Smith',
			subject: 'Hi there',
			content: 'Cras sit amet nibh libero, in gravida nulla.'
		},
		{
			avatar: 'assets/images-demo/avatars/4.jpg',
			from: 'Sophia Doe',
			subject: 'Wanna hang out tonight?',
			content: 'Nulla vel metus scelerisque ante sollicitudin commodo.'
		},
		{
			avatar: 'assets/images-demo/avatars/5.jpg',
			from: 'Luna Doe',
			subject: 'See you then',
			content: 'Cras purus Donec lacinia congue felis in faucibus.'
		}
	];

	folders = [
		{
			name: 'Games',
			updated: 'yesterday'
		},
		{
			name: 'Photos & Video',
			updated: '2 days ago'
		},
		{
			name: 'Entertainment',
			updated: 'a week ago'
		}
	];
	notes = [
		{
			name: 'More features coming',
			updated: 'yesterday'
		},
		{
			name: 'Datepicker is in-progress',
			updated: '2 days ago'
		}
	];
}
