import { Routes } from '@angular/router';

// Services
import { AuthGuard } from './auth/services/auth-guard.service';

// Pages
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingPageComponent } from './landing/components/landing-page/landing-page.component';

// Layout
import { LayoutComponent } from './internal/layout/components/layout/layout.component';

// Demo
import { DemoLayoutComponent } from '../demo/demo-layout/components/demo-layout/demo-layout.component';
import { PageLayoutFullscreenComponent } from '../demo/page-layouts/fullscreen/fullscreen.component';

export const routes: Routes = [
	{ path: '', component: LandingPageComponent },
	{ path: 'internal', component: LayoutComponent, canActivate: [AuthGuard] },
	{ path: 'demo', component: DemoLayoutComponent },
	{
		path: 'extra',
		loadChildren: '../demo/extra-pages/extra-pages.module#ExtraPagesModule'
	},
	{ path: 'fullscreen', component: PageLayoutFullscreenComponent },
	{
		path: '**',
		component: PageNotFoundComponent
	}
];
