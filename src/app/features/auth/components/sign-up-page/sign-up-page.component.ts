import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { SignUp } from '@app/models/sign-up';
import * as fromAuth from '@app/features/auth/reducers';
import * as Auth from '@app/features/auth/actions/auth.actions';

import { routerTransition } from '@app/core';
import { environment as env } from '@env/environment';

@Component({
	selector: 'app-sign-up-page',
	templateUrl: './sign-up-page.component.html',
	styleUrls: [],
	animations: [routerTransition]
})
export class SignUpPageComponent implements OnInit {
	version = env.versions.app;
	pending$ = this.store.select(fromAuth.getSignUpPagePending);
	error$ = this.store.select(fromAuth.getSignUpPageError);

	constructor(private store: Store<fromAuth.State>) {}

	ngOnInit() {}

	onSubmit($event: SignUp) {
		this.store.dispatch(new Auth.NewSignUp($event));
	}
}
