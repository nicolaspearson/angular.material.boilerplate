import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
	selector: 'app-page-not-found',
	templateUrl: './page-not-found.component.html',
	styleUrls: []
})
export class PageNotFoundComponent {
	constructor(private location: Location) {}

	onBackClick() {
		this.location.back();
	}
}
