import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ResetPassword } from '@app/auth/models/user';
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

	@Output() submitted = new EventEmitter<ResetPassword>();

	form: FormGroup = new FormGroup({
		emailAddress: new FormControl('')
	});

	constructor() {}

	ngOnInit() {}

	submit() {
		if (this.form.valid) {
			this.submitted.emit(this.form.value);
		}
	}
}
