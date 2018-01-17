import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from '../menu-items/dashboard/dashboard.component';

const routes: Routes = [
	{
		path: 'internal',
		component: LayoutComponent,
		children: [
			{
				path: '',
				redirectTo: '/internal/dashboard',
				pathMatch: 'full'
			},
			{
				path: 'dashboard',
				component: DashboardComponent
			},
			{
				path: 'table',
				loadChildren: '../menu-items/tables/tables.module#TablesModule'
			},
			{
				path: 'form',
				loadChildren: '../../../demo/forms/forms.module#MyFormsModule'
			},
			{
				path: 'page',
				loadChildren: '../../../demo/pages/pages.module#PagesModule'
			}
		]
	}
];

export const LayoutRoutingModule = RouterModule.forChild(routes);
