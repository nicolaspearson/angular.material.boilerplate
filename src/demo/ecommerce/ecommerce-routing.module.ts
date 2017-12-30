import { Routes, RouterModule } from '@angular/router';

import { ECommerceComponent } from './ecommerce.component';

import { ECommerceHorizontalProductsComponent } from './horizontal-products/horizontal-products.component';
import { ECommerceInvoiceComponent } from './invoice/invoice.component';
import { ECommerceProductsComponent } from './products/products.component';

export const ECommerceRoutes: Routes = [
	{
		path: '',
		component: ECommerceComponent,
		children: [
			{ path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
			{
				path: 'horizontal-products',
				component: ECommerceHorizontalProductsComponent
			},
			{ path: 'invoice', component: ECommerceInvoiceComponent },
			{ path: 'products', component: ECommerceProductsComponent }
		]
	}
];

export const ECommerceRoutingModule = RouterModule.forChild(ECommerceRoutes);
