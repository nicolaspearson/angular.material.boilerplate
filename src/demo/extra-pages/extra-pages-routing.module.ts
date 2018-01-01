import { Routes, RouterModule } from '@angular/router';

import { PageLoginComponent } from './login/login.component';
import { PageSignUpComponent } from './sign-up/sign-up.component';
import { PageForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { Page404Component } from './404/404.component';
import { Page500Component } from './500/500.component';
import { PageConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { PageLockScreenComponent } from './lock-screen/lock-screen.component';
import { PageMaintenanceComponent } from './maintenance/maintenance.component';

export const ExtraPagesRoutes: Routes = [
	{
		path: '',
		children: [
			{ path: '', redirectTo: '/demo/dashboard', pathMatch: 'full' },
			{ path: 'login', component: PageLoginComponent },
			{ path: 'sign-up', component: PageSignUpComponent },
			{ path: 'forgot-password', component: PageForgotPasswordComponent },
			{ path: '404', component: Page404Component },
			{ path: '500', component: Page500Component },
			{ path: 'confirm-email', component: PageConfirmEmailComponent },
			{ path: 'lock-screen', component: PageLockScreenComponent },
			{ path: 'maintenance', component: PageMaintenanceComponent }
		]
	}
];

export const ExtraPagesRoutingModule = RouterModule.forChild(ExtraPagesRoutes);
