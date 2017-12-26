import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '@app/core';
import { Router } from '@angular/router';

import { StockItem } from '../../models/stockItem';

@Component({
	selector: 'app-home-table-item',
	templateUrl: './home-table-item.component.html',
	styleUrls: ['./home-table-item.component.scss'],
	animations: [routerTransition]
})
export class HomeTableItemComponent implements OnInit {
	@Input() stockItem: StockItem;

	constructor(private router: Router) {}

	ngOnInit() {}

	onItemClick() {
		this.router.navigate(['/items', this.id]);
	}

	get id() {
		if (!this.stockItem) {
			return '';
		}
		return this.stockItem.stockItemId;
	}

	get registrationNumber() {
		if (!this.stockItem) {
			return '';
		}
		return this.stockItem.registrationNumber;
	}

	get make() {
		if (!this.stockItem) {
			return '';
		}
		return this.stockItem.make;
	}

	get model() {
		if (!this.stockItem) {
			return '';
		}
		return this.stockItem.model;
	}

	get modelYear() {
		if (!this.stockItem) {
			return '';
		}
		return this.stockItem.modelYear;
	}

	get odometer() {
		if (!this.stockItem) {
			return '';
		}
		return this.stockItem.odometer;
	}

	get colour() {
		if (!this.stockItem) {
			return '';
		}
		return this.stockItem.colour;
	}

	get vin() {
		if (!this.stockItem) {
			return '';
		}
		return this.stockItem.vin;
	}

	get retailPrice() {
		if (!this.stockItem) {
			return '';
		}
		return this.stockItem.retailPrice;
	}

	get costPrice() {
		if (!this.stockItem) {
			return '';
		}
		return this.stockItem.costPrice;
	}

	get accessories() {
		if (!this.stockItem) {
			return [];
		}
		return this.stockItem.accessories;
	}

	get images() {
		if (!this.stockItem) {
			return [];
		}
		return this.stockItem.images;
	}

	get thumbnail(): string | boolean {
		if (
			this.stockItem &&
			this.stockItem.stockImages &&
			this.stockItem.stockImages.length > 0
		) {
			return 'data:image/png;base64,' + this.stockItem.stockImages[0].image;
		}
		return false;
	}
}
