import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ForgotPassword } from '@app/models/auth';
import { routerTransition } from '@app/core';

@Component({
	selector: 'app-forgot-password-form',
	templateUrl: './forgot-password-form.component.html',
	styleUrls: [],
	animations: [routerTransition]
})
export class ForgotPasswordFormComponent implements OnInit {
	@Input()
	set pending(isPending: boolean) {
		if (isPending) {
			this.form.disable();
		} else {
			this.form.enable();
		}
	}

	@Input() errorMessage: string | null;

	@Output() submitted = new EventEmitter<ForgotPassword>();

	form: FormGroup = new FormGroup({
		emailAddress: new FormControl('', [
			Validators.required,
			Validators.minLength(1),
			Validators.maxLength(100)
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
