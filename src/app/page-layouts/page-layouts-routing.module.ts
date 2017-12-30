import { Routes, RouterModule } from '@angular/router';

import { PageLayoutsComponent } from './page-layouts.component';

import { PageLayoutCenteredComponent } from './centered/centered.component';
import { PageLayoutFullWidthComponent } from './full-width/full-width.component';
import { PageLayoutWidthTabsComponent } from './with-tabs/with-tabs.component';

export const PageLayoutsRoutes: Routes = [
	{
		// pglayout instead of "page-layout", otherwise appHighlightActiveItems will also highlights /page routes
		path: '',
		component: PageLayoutsComponent,
		children: [
			{ path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
			{ path: 'centered', component: PageLayoutCenteredComponent },
			{ path: 'full-width', component: PageLayoutFullWidthComponent },
			{ path: 'with-tabs', component: PageLayoutWidthTabsComponent }
		]
	}
];

export const PageLayoutsRoutingModule = RouterModule.forChild(
	PageLayoutsRoutes
);
