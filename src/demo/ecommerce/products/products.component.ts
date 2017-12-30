import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
	selector: 'app-ecommerce-products',
	styles: [],
	templateUrl: './products.component.html',
	providers: [ProductService]
})
export class ECommerceProductsComponent implements OnInit {
	products;

	constructor(private productService: ProductService) {}

	getProducts(): void {
		this.products = this.productService.getProducts();
	}

	ngOnInit(): void {
		this.getProducts();
	}
}
