import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ResetPassword } from '@app/models/user';
import * as fromAuth from '@app/features/auth/reducers';
import * as Auth from '@app/features/auth/actions/auth.actions';

import { routerTransition } from '@app/core';
import { environment as env } from '@env/environment';

@Component({
	selector: 'app-forgot-password-page',
	templateUrl: './forgot-password-page.component.html',
	styleUrls: [],
	animations: [routerTransition]
})
export class ForgotPasswordPageComponent implements OnInit {
	version = env.versions.app;
	pending$ = this.store.select(fromAuth.getForgotPasswordPagePending);
	error$ = this.store.select(fromAuth.getForgotPasswordPageError);

	constructor(private store: Store<fromAuth.State>) {}

	ngOnInit() {}

	onSubmit($event: ResetPassword) {
		this.store.dispatch(new Auth.SubmitForgotPassword($event));
	}
}
