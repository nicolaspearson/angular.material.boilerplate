import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

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
				path: 'form',
				loadChildren: '../../../demo/forms/forms.module#MyFormsModule'
			},
			{
				path: 'page',
				loadChildren: '../../../demo/pages/pages.module#PagesModule'
			},
			{
				path: 'table',
				loadChildren:
					'../../../demo/tables/tables.module#MyTablesModule'
			}
		]
	}
];

export const LayoutRoutingModule = RouterModule.forChild(routes);
