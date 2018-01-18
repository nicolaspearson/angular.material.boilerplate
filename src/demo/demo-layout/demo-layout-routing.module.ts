import { RouterModule, Routes } from '@angular/router';

import { DemoLayoutComponent } from './components/demo-layout/demo-layout.component';
import { DashboardComponent } from 'demo/dashboard/dashboard.component';

const routes: Routes = [
	{
		path: 'demo',
		component: DemoLayoutComponent,
		children: [
			{
				path: '',
				redirectTo: '/demo/dashboard',
				pathMatch: 'full'
			},
			{
				path: 'dashboard',
				component: DashboardComponent
			},
			{
				path: 'chart',
				loadChildren: '../../demo/charts/charts.module#ChartsModule'
			},
			{
				path: 'ecommerce',
				loadChildren:
					'../../demo/ecommerce/ecommerce.module#ECommerceModule'
			},
			{
				path: 'form',
				loadChildren: '../../demo/forms/forms.module#MyFormsModule'
			},
			{
				path: 'page',
				loadChildren: '../../demo/pages/pages.module#PagesModule'
			},
			{
				path: 'pglayout',
				loadChildren:
					'../../demo/page-layouts/page-layouts.module#PageLayoutsModule'
			},
			{
				path: 'table',
				loadChildren: '../../demo/tables/tables.module#MyTablesModule'
			},
			{
				path: 'ui',
				loadChildren: '../../demo/ui/ui.module#UIModule'
			}
		]
	}
];

export const DemoLayoutRoutingModule = RouterModule.forChild(routes);
