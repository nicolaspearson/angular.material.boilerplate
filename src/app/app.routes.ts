import { Routes } from '@angular/router';

import { AuthGuard } from './auth/services/auth-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Page Layouts
import { PageLayoutFullscreenComponent } from './page-layouts/fullscreen/fullscreen.component';

export const routes: Routes = [
	{ path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
	{ path: 'app', component: LayoutComponent },
	{
		path: 'extra',
		loadChildren: './extra-pages/extra-pages.module#ExtraPagesModule'
	},
	{ path: 'fullscreen', component: PageLayoutFullscreenComponent },
	{
		path: 'items',
		loadChildren: './home/home.module#HomeModule',
		canActivate: [AuthGuard]
	},
	{
		path: '**',
		component: PageNotFoundComponent
	}
];
