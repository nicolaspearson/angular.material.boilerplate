import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromAuth from '@app/features/auth/reducers';
import * as Auth from '@app/features/auth/actions/auth.actions';

import { NewPassword } from '@app/models/auth';

import { routerTransition } from '@app/core';
import { environment as env } from '@env/environment';

@Component({
	selector: 'app-new-password-page',
	templateUrl: './new-password-page.component.html',
	styleUrls: [],
	animations: [routerTransition]
})
export class NewPasswordPageComponent implements OnInit {
	version = env.versions.app;
	pending$ = this.store.select(fromAuth.getNewPasswordPagePending);
	error$ = this.store.select(fromAuth.getNewPasswordPageError);

	constructor(private store: Store<fromAuth.State>) {}

	ngOnInit() {}

	onSubmit($event: NewPassword) {
		this.store.dispatch(new Auth.SubmitNewPassword($event));
	}
}
