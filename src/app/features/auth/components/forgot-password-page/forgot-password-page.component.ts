import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ToastrService } from 'ngx-toastr';

import * as fromAuth from '@app/features/auth/reducers';
import * as Auth from '@app/features/auth/actions/auth.actions';
import { AuthEffects } from '@app/features/auth/effects/auth.effects';

import { ForgotPassword } from '@app/models/auth';

import { routerTransition } from '@app/core';
import { environment as env } from '@env/environment';

@Component({
	selector: 'app-forgot-password-page',
	templateUrl: './forgot-password-page.component.html',
	styleUrls: [],
	animations: [routerTransition]
})
export class ForgotPasswordPageComponent {
	version = env.versions.app;
	pending$ = this.store.select(fromAuth.getForgotPasswordPagePending);
	error$ = this.store.select(fromAuth.getForgotPasswordPageError);

	constructor(
		private store: Store<fromAuth.State>,
		private authEffects: AuthEffects,
		private toastrService: ToastrService
	) {
		this.subscribeToEffects();
	}

	subscribeToEffects() {
		this.authEffects.forgotPasswordSuccess$.subscribe(
			(action: Auth.ForgotPasswordSuccess) => {
				this.toastrService.success(
					'Check your inbox for a password reset link',
					'Success!'
				);
			}
		);

		this.authEffects.forgotPasswordFailure$.subscribe(
			(action: Auth.ForgotPasswordFailure) => {
				if (action.payload) {
					this.toastrService.error(action.payload, 'Failed!');
				} else {
					this.toastrService.error(
						'Password Cannot Be Reset',
						'Failed!'
					);
				}
			}
		);
	}

	onSubmit($event: ForgotPassword) {
		this.store.dispatch(new Auth.SubmitForgotPassword($event));
	}
}
