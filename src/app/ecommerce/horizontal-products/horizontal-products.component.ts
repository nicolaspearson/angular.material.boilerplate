import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
	selector: 'app-ecommerce-horizontal-products',
	styles: [],
	templateUrl: './horizontal-products.component.html',
	providers: [ProductService]
})
export class ECommerceHorizontalProductsComponent implements OnInit {
	products;

	constructor(private productService: ProductService) {}

	getProducts(): void {
		this.products = this.productService.getProducts();
	}

	ngOnInit(): void {
		this.getProducts();
	}
}
