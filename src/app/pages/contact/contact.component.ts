import { Component } from '@angular/core';

@Component({
	selector: 'app-page-contact',
	styles: [],
	templateUrl: './contact.component.html'
})
export class PageContactComponent {
	submitted = false;

	// use `type="button"` instead of `type="submit"` to avoid refreshing
	onSubmit() {
		event.preventDefault();
		this.submitted = true;
	}
}
