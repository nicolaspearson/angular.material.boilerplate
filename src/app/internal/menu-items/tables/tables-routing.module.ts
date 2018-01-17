import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@app/auth/services/auth-guard.service';
import { StockItemExistsGuard } from './services/stock-item-guard.service';

import { TablesComponent } from './tables.component';
import { TableDataTableComponent } from './components/data-table/data-table.component';

export const TablesRoutes: Routes = [
	{
		path: '',
		component: TablesComponent,
		data: {
			title: 'Tables'
		},
		canActivate: [AuthGuard],
		children: [
			{ path: '', redirectTo: '/internal/dashboard', pathMatch: 'full' },
			{ path: 'data-table', component: TableDataTableComponent },
			{
				path: 'data-table/:id',
				component: TableDataTableComponent,
				canActivate: [StockItemExistsGuard]
			}
		]
	}
];

export const TablesRoutingModule = RouterModule.forChild(TablesRoutes);
