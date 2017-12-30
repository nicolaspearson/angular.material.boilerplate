import { Component } from '@angular/core';

@Component({
	selector: 'app-form-radio-button',
	styles: [],
	templateUrl: './radio-button.component.html'
})
export class FormRadioButtonComponent {
	radio = {
		group1: 'Banana',
		group2: '2',
		group3: 'Primary',
		group4: 'before'
	};

	radioData = [
		{ label: 'Radio: disabled', value: '1', isDisabled: true },
		{ label: 'Radio: disabled, Checked', value: '2', isDisabled: true }
	];
}
