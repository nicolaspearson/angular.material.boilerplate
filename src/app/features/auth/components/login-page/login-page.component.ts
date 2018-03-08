import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ToastrService } from 'ngx-toastr';

import { Authenticate } from '@app/models/auth';
import * as fromAuth from '@app/features/auth/reducers';
import * as Auth from '@app/features/auth/actions/auth.actions';
import { AuthEffects } from '@app/features/auth/effects/auth.effects';

import { VerifyAccountService } from '@app/features/auth/services/verify-account.service';

import { routerTransition } from '@app/core';
import { environment as env } from '@env/environment';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: [],
	animations: [routerTransition]
})
export class LoginPageComponent implements OnInit {
	version = env.versions.app;
	pending$ = this.store.select(fromAuth.getLoginPagePending);
	error$ = this.store.select(fromAuth.getLoginPageError);

	private currentRouteId;

	constructor(
		private store: Store<fromAuth.State>,
		private authEffects: AuthEffects,
		private toastrService: ToastrService,
		private verifyAccountService: VerifyAccountService
	) {
		if (this.verifyAccountService.hasData()) {
			this.subscribeVerificationToEffects();
		}
	}

	ngOnInit() {
		if (this.verifyAccountService.hasData()) {
			const verifyAccount = this.verifyAccountService.getData();
			if (verifyAccount.verificationToken) {
				this.store.dispatch(
					new Auth.SubmitVerifyAccount(verifyAccount)
				);
			}
		}
	}

	subscribeVerificationToEffects() {
		this.authEffects.verifyAccountSuccess$.subscribe(
			(action: Auth.VerifyAccountSuccess) => {
				this.toastrService.success('Account Verified', 'Success!');
			}
		);

		this.authEffects.verifyAccountFailure$.subscribe(
			(action: Auth.VerifyAccountFailure) => {
				this.toastrService.error(
					'Invalid Token. Account NOT Verified',
					'Failed!'
				);
			}
		);
	}

	onSubmit($event: Authenticate) {
		this.store.dispatch(new Auth.Login($event));
	}
}
