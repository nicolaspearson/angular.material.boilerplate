import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { ToastrService } from 'ngx-toastr';

import * as fromAuth from '@app/features/auth/reducers';
import * as Auth from '@app/features/auth/actions/auth.actions';
import { AuthEffects } from '@app/features/auth/effects/auth.effects';

import { routerTransition } from '@app/core';

@Component({
	selector: 'app-reset-password',
	templateUrl: './reset-password.component.html',
	styleUrls: [],
	animations: [routerTransition]
})
export class ResetPasswordComponent implements OnInit {
	private currentRouteId;

	constructor(
		private route: ActivatedRoute,
		private store: Store<fromAuth.State>,
		private authEffects: AuthEffects,
		private toastrService: ToastrService
	) {
		this.subscribeToEffects();
	}

	ngOnInit() {
		this.currentRouteId = this.route.snapshot.params['id'];
	}

	subscribeToEffects() {
		this.authEffects.resetPasswordSuccess$.subscribe(
			(action: Auth.ResetPasswordSuccess) => {
				this.toastrService.success(
					'Authorized To Reset Password',
					'Success!'
				);
			}
		);

		this.authEffects.resetPasswordFailure$.subscribe(
			(action: Auth.ResetPasswordFailure) => {
				if (action.payload) {
					this.toastrService.error(action.payload, 'Failed!');
				} else {
					this.toastrService.error('Password NOT Reset', 'Failed!');
				}
				this.store.dispatch(new Auth.ForgotPasswordRedirect());
			}
		);
	}

	onResetClick() {
		this.store.dispatch(
			new Auth.SubmitResetPassword({ resetToken: this.currentRouteId })
		);
	}
}
