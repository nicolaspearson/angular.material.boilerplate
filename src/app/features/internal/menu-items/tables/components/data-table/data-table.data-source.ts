import { MatPaginator, MatSort } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { BaseTableDataSource } from '@app/core/data-source/base-table.data-source';

import { StockItem } from '@app/models/stock-item';

export class StockItemDataSource extends BaseTableDataSource<StockItem> {
	constructor(
		public stockItems$: Observable<StockItem[]>,
		public paginator: MatPaginator,
		public sort: MatSort
	) {
		super(stockItems$, paginator, sort);
	}

	/*
	 * Returns the filtered data
	 */
	getFilteredData(items: StockItem[]): StockItem[] {
		return items.filter((item: StockItem) => {
			const searchString = (
				item.registrationNumber +
				item.make +
				item.model +
				String(item.modelYear)
			).toLowerCase();
			return searchString.indexOf(this.filter) !== -1;
		});
	}

	/**
	 * Returns a sorted copy of the data
	 */
	getSortedData(items: StockItem[]): StockItem[] {
		const data = items;
		if (!this._sort.active || this._sort.direction === '') {
			return data;
		}

		return data.sort((a, b) => {
			let propertyA: number | string = '';
			let propertyB: number | string = '';

			switch (this._sort.active) {
				case 'registrationNumber':
					[propertyA, propertyB] = [
						a.registrationNumber,
						b.registrationNumber
					];
					break;

				case 'make':
					[propertyA, propertyB] = [a.make, b.make];
					break;

				case 'model':
					[propertyA, propertyB] = [a.model, b.model];
					break;

				case 'modelYear':
					[propertyA, propertyB] = [a.modelYear, b.modelYear];
					break;

				case 'odometer':
					[propertyA, propertyB] = [a.odometer, b.odometer];
					break;

				case 'colour':
					[propertyA, propertyB] = [a.colour, b.colour];
					break;

				case 'retailPrice':
					[propertyA, propertyB] = [a.retailPrice, b.retailPrice];
					break;
			}

			const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
			const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

			return (
				(valueA < valueB ? -1 : 1) *
				(this._sort.direction === 'asc' ? 1 : -1)
			);
		});
	}
}
