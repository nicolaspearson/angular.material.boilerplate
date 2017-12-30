import { Component, OnInit } from '@angular/core';
import { UIService } from '../ui.service';

@Component({
	selector: 'app-ui-testimonials',
	styles: [],
	templateUrl: './testimonials.component.html'
})
export class UITestimonialsComponent implements OnInit {
	testimonials;

	constructor(private uiService: UIService) {}

	getTestimonials(): void {
		this.testimonials = this.uiService.getTestimonials();
	}

	ngOnInit(): void {
		this.getTestimonials();
	}
}
