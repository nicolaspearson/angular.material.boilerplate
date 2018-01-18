import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/let';

import * as fromTables from '@app/features/internal/menu-items/tables/reducers';
import * as Tables from '@app/features/internal/menu-items/tables/actions/tables.actions';

import { StockItem } from '@app/models/stock-item';

import { routerTransition } from '@app/core';
import { environment as env } from '@env/environment';

@Component({
	selector: 'app-data-table-page',
	changeDetection: ChangeDetectionStrategy.Default,
	templateUrl: './data-table-page.component.html',
	styleUrls: ['./data-table-page.component.scss'],
	animations: [routerTransition]
})
export class DataTablePageComponent implements OnInit {
	error$ = this.store.select(fromTables.getTablesPageError);

	stockItems$: Observable<StockItem[]> = this.store.select(
		fromTables.getStockItemCollection
	);

	constructor(
		private store: Store<fromTables.State>,
		private router: Router
	) {
		this.stockItems$ = store.select(fromTables.getStockItemCollection);
	}

	ngOnInit() {
		this.store.dispatch(new Tables.FetchStockItems());
	}

	createStockItem() {
		this.router.navigate(['/items', 'new']);
	}
}
