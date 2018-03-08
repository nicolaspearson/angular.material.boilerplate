import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';

import { Authenticate } from '@app/models/auth';
import * as fromAuth from '@app/features/auth/reducers';
import * as Auth from '@app/features/auth/actions/auth.actions';

import { routerTransition } from '@app/core';
import { environment as env } from '@env/environment';
import { VerifyAccountService } from '@app/features/auth/services/verify-account.service';

@Component({
	selector: 'app-verify-account-page',
	templateUrl: './verify-account-page.component.html',
	styleUrls: [],
	animations: [routerTransition]
})
export class VerifyAccountPageComponent implements OnInit {
	private currentRouteId;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private verifyAccountService: VerifyAccountService
	) {}

	ngOnInit() {
		if (
			this.route.snapshot &&
			this.route.snapshot.params &&
			this.route.snapshot.params['id']
		) {
			// Get the account verification token
			this.currentRouteId = this.route.snapshot.params['id'];
		} else {
			this.currentRouteId = undefined;
		}
		this.verifyAccountService.setData({
			verificationToken: this.currentRouteId
		});
		this.router.navigateByUrl('/login');
	}
}
