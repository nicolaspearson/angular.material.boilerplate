import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Authenticate } from '@app/models/auth';

import { routerTransition } from '@app/core';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: [],
	animations: [routerTransition]
})
export class LoginFormComponent implements OnInit {
	@Input()
	set pending(isPending: boolean) {
		if (isPending) {
			this.form.disable();
		} else {
			this.form.enable();
		}
	}

	@Input() errorMessage: string | null;

	@Output() submitted = new EventEmitter<Authenticate>();

	form: FormGroup = new FormGroup({
		username: new FormControl('', [
			Validators.required,
			Validators.minLength(1)
		]),
		password: new FormControl('', [
			Validators.required,
			Validators.minLength(1)
		])
	});

	constructor() {}

	ngOnInit() {}

	submit() {
		if (this.form.valid) {
			this.submitted.emit(this.form.value);
		}
	}
}
