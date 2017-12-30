import { Component, OnInit } from '@angular/core';
import { UIService } from '../ui.service';

@Component({
	selector: 'app-ui-sashes',
	styles: [],
	templateUrl: './sashes.component.html'
})
export class UISashesComponent implements OnInit {
	products;

	constructor(private uiService: UIService) {}

	getProducts(): void {
		this.products = this.uiService.getProducts();
	}

	ngOnInit(): void {
		this.getProducts();
	}
}
