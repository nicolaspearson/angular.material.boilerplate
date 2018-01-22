import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { merge } from 'rxjs/observable/merge';
import { map } from 'rxjs/operators/map';
import { combineLatest } from 'rxjs/observable/combineLatest';

export class BaseTableDataSource<T> extends DataSource<T> {
	filterChange = new BehaviorSubject('');

	public filteredData: T[] = [];
	public sortedData: T[] = [];
	public renderedData: T[] = [];

	constructor(
		public _items$: Observable<T[]>,
		public _paginator: MatPaginator,
		public _sort: MatSort
	) {
		super();
		// Reset to the first page when the user changes the filter.
		this.filterChange.subscribe(() => (this._paginator.pageIndex = 0));
	}

	get filter(): string {
		return this.filterChange.value;
	}

	set filter(filter: string) {
		this.filterChange.next(filter);
	}

	connect(): Observable<T[]> {
		const displayDataChanges = [
			this._paginator.page,
			this._sort.sortChange,
			this.filterChange
		];

		return Observable.combineLatest(
			this._items$,
			Observable.merge(...displayDataChanges),
			_items => {
				this.filteredData = this.getFilteredData(_items.slice());
				this.sortedData = this.getSortedData(this.filteredData.slice());
				const startIndex =
					this._paginator.pageIndex * this._paginator.pageSize;
				this.renderedData = this.sortedData.splice(
					startIndex,
					this._paginator.pageSize
				);
				return this.renderedData;
			}
		);
	}

	disconnect(): void {
		// No op
	}

	/**
	 * Override in inheriting class
	 *
	 * Returns the filtered data
	 */
	getFilteredData(items: T[]): T[] {
		return items.filter((item: T) => {
			const searchString = 'Override in child';
			/* Example:
				const searchString = (
					item.make
				).toLowerCase();
			 */
			return searchString.indexOf(this.filter) !== -1;
		});
	}

	/**
	 * Override in inheriting class
	 *
	 * Returns a sorted copy of the data
	 */
	getSortedData(items: T[]): T[] {
		const data = items;
		if (!this._sort.active || this._sort.direction === '') {
			return data;
		}

		return data.sort((a, b) => {
			const propertyA: number | string = '';
			const propertyB: number | string = '';

			switch (this._sort.active) {
			/* Example:
					case 'make':
						[propertyA, propertyB] = [a.make, b.make];
						break;
			*/
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
