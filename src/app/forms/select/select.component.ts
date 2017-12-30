import { Component } from '@angular/core';

@Component({
	selector: 'app-form-select',
	styles: [],
	templateUrl: './select.component.html'
})
export class FormSelectComponent {
	selectedValue;

	foods = [
		{ value: 'steak-0', viewValue: 'Steak' },
		{ value: 'pizza-1', viewValue: 'Pizza' },
		{ value: 'tacos-2', viewValue: 'Tacos' }
	];
}
