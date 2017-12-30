import { Component } from '@angular/core';

@Component({
	selector: 'app-form-expansion-panel',
	templateUrl: 'expansion-panel.component.html',
	styleUrls: ['demo.css']
})
export class FormExpansionPanelComponent {
	step = 0;

	setStep(index: number) {
		this.step = index;
	}

	nextStep() {
		this.step++;
	}

	prevStep() {
		this.step--;
	}
}
