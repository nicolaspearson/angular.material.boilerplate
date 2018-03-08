import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignUp } from '@app/models/sign-up';
import { routerTransition } from '@app/core';

@Component({
	selector: 'app-sign-up-form',
	templateUrl: './sign-up-form.component.html',
	styleUrls: [],
	animations: [routerTransition]
})
export class SignUpFormComponent implements OnInit {
	@Input()
	set pending(isPending: boolean) {
		if (isPending) {
			this.form.disable();
		} else {
			this.form.enable();
		}
	}

	@Input() errorMessage: string | null;

	@Output() submitted = new EventEmitter<SignUp>();

	form: FormGroup = new FormGroup({
		username: new FormControl('', [
			Validators.required,
			Validators.minLength(1),
			Validators.maxLength(50)
		]),
		password: new FormControl('', [
			Validators.required,
			Validators.minLength(6),
			Validators.maxLength(50)
		]),
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
