import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { ENTER } from '@angular/cdk/keycodes';

const COMMA = 188;

@Component({
	selector: 'app-form-chips',
	styles: [],
	templateUrl: './chips.component.html'
})
export class FormChipsComponent {
	visible = true;
	selectable = true;
	removable = true;
	addOnBlur = true;

	// Enter, comma
	separatorKeysCodes = [ENTER, COMMA];

	fruits = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];

	add(event: MatChipInputEvent): void {
		const input = event.input;
		const value = event.value;

		// Add our person
		if ((value || '').trim()) {
			this.fruits.push({ name: value.trim() });
		}

		// Reset the input value
		if (input) {
			input.value = '';
		}
	}

	remove(fruit: any): void {
		const index = this.fruits.indexOf(fruit);

		if (index >= 0) {
			this.fruits.splice(index, 1);
		}
	}
}
