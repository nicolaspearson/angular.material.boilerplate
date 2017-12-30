import { Component } from '@angular/core';

@Component({
	selector: 'app-form-slider',
	styles: [],
	templateUrl: './slider.component.html'
})
export class FormSliderComponent {
	autoTicks = false;
	disabled = false;
	invert = false;
	max = 100;
	min = 0;
	showTicks = false;
	step = 1;
	thumbLabel = true;
	value = 20;
	vertical = false;

	get tickInterval(): number | 'auto' {
		return this.showTicks
			? this.autoTicks ? 'auto' : this._tickInterval
			: null;
	}
	set tickInterval(v) {
		this._tickInterval = Number(v);
	}
	private _tickInterval = 1;
}
