import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AppConfig } from '@app/config';

@Component({
	selector: 'app-landing-page',
	styleUrls: [],
	templateUrl: './landing-page.component.html'
})
export class LandingPageComponent implements OnInit {
	public AppConfig: any;

	@Input() newForm: any;

	form: FormGroup;

	testimonials;

	constructor(private formBuilder: FormBuilder, private router: Router) {}

	ngOnInit() {
		this.AppConfig = AppConfig;

		this.newForm = {
			email: ''
		};

		this.form = this.formBuilder.group({
			email: [this.email, Validators.required]
		});

		this.testimonials = this.getTestimonials();
	}

	get email() {
		return this.newForm.email;
	}

	submitSubscribe() {
		if (this.form.valid) {
			const newForm: any = this.form.value;
		}
	}

	getTestimonials() {
		return [
			{
				content:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ratione consequuntur ut placeat.',
				avatar: 'demo/assets/demo-images/avatars/1.jpg',
				name: 'Jason Bourne',
				title: 'Senior PM'
			},
			{
				content:
					'Cum suscipit voluptatem modi repellat consequuntur aliquid nostrum, dolore pariatur consequatur nobis',
				avatar: 'demo/assets/demo-images/avatars/2.jpg',
				name: 'Bella Swan',
				title: 'VP Product'
			},
			{
				content:
					'Temporibus nesciunt quod magnam dicta ea, quae minima tempore eiciendis nisi ab, perferendis',
				avatar: 'demo/assets/demo-images/avatars/3.jpg',
				name: 'Min Chan',
				title: 'Engineer Lead'
			}
		];
	}
}
