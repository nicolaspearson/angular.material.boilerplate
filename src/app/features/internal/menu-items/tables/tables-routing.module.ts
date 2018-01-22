import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@app/features/auth/services/auth-guard.service';
import { StockItemExistsGuard } from './services/stock-item-guard.service';

import { TablesComponent } from './tables.component';
import { DataTableComponent } from './components/data-table/data-table.component';

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
			{ path: 'data-table', component: DataTableComponent },
			{
				path: 'data-table/:id',
				component: DataTableComponent, // TODO: Should be a detail component
				canActivate: [StockItemExistsGuard]
			}
		]
	}
];

export const TablesRoutingModule = RouterModule.forChild(TablesRoutes);
