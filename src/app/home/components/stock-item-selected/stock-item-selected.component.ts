import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import * as fromHome from '../../reducers';
import * as Home from '../../actions/home.actions';
import { StockItem } from '../../models/stockItem';

import { routerTransition } from '@app/core';

@Component({
	selector: 'app-stock-item-selected',
	changeDetection: ChangeDetectionStrategy.Default,
	templateUrl: './stock-item-selected.component.html',
	styleUrls: ['./stock-item-selected.component.scss'],
	animations: [routerTransition]
})
export class StockItemSelectedComponent implements OnInit {
	stockItem$: Observable<StockItem>;
	isSelectedStockItemInCollection$: Observable<boolean>;

	constructor(private store: Store<fromHome.State>, private router: Router) {
		const currentRoute = router.url;
		if (currentRoute === '/items/new') {
			this.stockItem$ = store.select(fromHome.getNewStockItem);
		} else {
			this.stockItem$ = store.select(fromHome.getSelectedStockItem);
			this.isSelectedStockItemInCollection$ = store.select(
				fromHome.isSelectedStockItemInCollection
			);
		}
	}

	ngOnInit() {}

	removeStockItem(stockItem: StockItem) {
		this.store.dispatch(new Home.RemoveStockItem(stockItem));
	}

	addStockItem(stockItem: StockItem) {
		this.store.dispatch(new Home.AddStockItem(stockItem));
	}

	updateStockItem(stockItem: StockItem) {
		this.store.dispatch(new Home.UpdateStockItem(stockItem));
	}
}
