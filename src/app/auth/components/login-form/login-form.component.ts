import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Authenticate } from '../../models/user';
import { routerTransition } from '@app/core';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss'],
	animations: [routerTransition]
})
export class LoginFormComponent implements OnInit {
	logo = require('../../../../assets/logo.png');

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
		username: new FormControl(''),
		password: new FormControl('')
	});

	constructor() {}

	ngOnInit() {}

	submit() {
		if (this.form.valid) {
			this.submitted.emit(this.form.value);
		}
	}
}
