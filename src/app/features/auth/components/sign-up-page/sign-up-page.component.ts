import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ToastrService } from 'ngx-toastr';

import * as fromAuth from '@app/features/auth/reducers';
import * as Auth from '@app/features/auth/actions/auth.actions';
import { AuthEffects } from '@app/features/auth/effects/auth.effects';

import { SignUp } from '@app/models/sign-up';

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

	constructor(
		private store: Store<fromAuth.State>,
		private authEffects: AuthEffects,
		private toastrService: ToastrService
	) {
		this.subscribeToEffects();
	}

	ngOnInit() {}

	subscribeToEffects() {
		this.authEffects.signUpSuccess$.subscribe(
			(action: Auth.SignUpSuccess) => {
				this.toastrService.success(
					'Check your inbox to verify your account',
					'Success!'
				);
			}
		);
	}

	onSubmit($event: SignUp) {
		this.store.dispatch(new Auth.NewSignUp($event));
	}
}
