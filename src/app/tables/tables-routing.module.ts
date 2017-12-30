import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';

import { TableResponsiveComponent } from './responsive/responsive.component';
import { TableStaticComponent } from './static/static.component';
import { TableDataTableComponent } from './data-table/data-table.component';

export const TablesRoutes: Routes = [
	{
		path: '',
		component: TablesComponent,
		children: [
			{ path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
			{ path: 'responsive', component: TableResponsiveComponent },
			{ path: 'static', component: TableStaticComponent },
			{ path: 'data-table', component: TableDataTableComponent }
		]
	}
];

export const TablesRoutingModule = RouterModule.forChild(TablesRoutes);
