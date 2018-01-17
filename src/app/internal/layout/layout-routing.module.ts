import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@app/auth/services/auth-guard.service';

import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from '../menu-items/dashboard/dashboard.component';

const routes: Routes = [
	{
		path: 'internal',
		component: LayoutComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: '',
				redirectTo: '/internal/dashboard',
				pathMatch: 'full',
				canActivate: [AuthGuard]
			},
			{
				path: 'dashboard',
				component: DashboardComponent,
				canActivate: [AuthGuard]
			},
			{
				path: 'table',
				loadChildren: '../menu-items/tables/tables.module#TablesModule',
				canActivate: [AuthGuard]
			}
		]
	}
];

export const LayoutRoutingModule = RouterModule.forChild(routes);
