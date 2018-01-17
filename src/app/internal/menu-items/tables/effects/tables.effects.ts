import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { TablesService } from '../services/tables.service';
import * as Tables from '../actions/tables.actions';

import { LocalStorageService } from '@app/core/local-storage/local-storage.service';
import { LS_STOCK_ITEMS_KEY } from '@app/core/local-storage/keys';

@Injectable()
export class TablesEffects {
	constructor(
		private actions$: Actions,
		private tablesService: TablesService,
		private localStorageService: LocalStorageService,
		private router: Router
	) {}

	@Effect()
	fetchStockItems$ = this.actions$
		.ofType(Tables.FETCH_STOCK_ITEMS)
		.map((action: Tables.FetchStockItems) => action.payload)
		.exhaustMap(() =>
			this.tablesService
				.fetchStockItems()
				.map(stockItems => {
					this.localStorageService.setItem(LS_STOCK_ITEMS_KEY, {
						stockItems
					});
					return new Tables.FetchStockItemsSuccess(stockItems);
				})
				.catch(error => of(new Tables.FetchStockItemsFailure(error)))
		);

	@Effect()
	addStockItem$: Observable<Action> = this.actions$
		.ofType(Tables.ADD_STOCK_ITEM)
		.map((action: Tables.AddStockItem) => action.payload)
		.mergeMap(stockItem =>
			this.tablesService
				.addStockItem(stockItem)
				.map(addedStockItem => {
					return new Tables.AddStockItemSuccess(stockItem);
				})
				.catch(error => of(new Tables.AddStockItemFailure(error)))
		);

	@Effect()
	updateStockItem$: Observable<Action> = this.actions$
		.ofType(Tables.UPDATE_STOCK_ITEM)
		.map((action: Tables.UpdateStockItem) => action.payload)
		.mergeMap(stockItem =>
			this.tablesService
				.updateStockItem(stockItem)
				.map(updatedStockItem => {
					return new Tables.UpdateStockItemSuccess(stockItem);
				})
				.catch(error => of(new Tables.UpdateStockItemFailure(error)))
		);

	@Effect()
	removeStockItem$: Observable<Action> = this.actions$
		.ofType(Tables.REMOVE_STOCK_ITEM)
		.map((action: Tables.RemoveStockItem) => action.payload)
		.mergeMap(stockItem =>
			this.tablesService
				.removeStockItem(stockItem)
				.map(removedStockItem => {
					return new Tables.RemoveStockItemSuccess(stockItem);
				})
				.catch(error => of(new Tables.RemoveStockItemFailure(error)))
		);

	@Effect({ dispatch: false })
	addSuccess$ = this.actions$
		.ofType(Tables.ADD_STOCK_ITEM_SUCCESS)
		.do(() => this.router.navigate(['/']));

	@Effect({ dispatch: false })
	updateSuccess$ = this.actions$
		.ofType(Tables.UPDATE_STOCK_ITEM_SUCCESS)
		.do(() => this.router.navigate(['/']));

	@Effect({ dispatch: false })
	removeSuccess$ = this.actions$
		.ofType(Tables.REMOVE_STOCK_ITEM_SUCCESS)
		.do(() => this.router.navigate(['/']));
}
