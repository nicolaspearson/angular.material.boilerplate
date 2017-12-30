import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ECommerceRoutingModule } from './ecommerce-routing.module';
import { ECommerceComponent } from './ecommerce.component';

import { ECommerceHorizontalProductsComponent } from './horizontal-products/horizontal-products.component';
import { ECommerceInvoiceComponent } from './invoice/invoice.component';
import { ECommerceProductsComponent } from './products/products.component';

@NgModule({
	imports: [CommonModule, ECommerceRoutingModule],
	declarations: [
		ECommerceComponent,
		ECommerceProductsComponent,
		ECommerceHorizontalProductsComponent,
		ECommerceInvoiceComponent
	]
})
export class ECommerceModule {}
