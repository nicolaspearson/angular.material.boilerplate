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

import { HomeService } from '../services/home.service';
import * as Home from '../actions/home.actions';

import { LocalStorageService } from '../../core/local-storage/local-storage.service';
import { LS_STOCK_ITEMS_KEY } from '../../core/local-storage/keys';

@Injectable()
export class HomeEffects {
	constructor(
		private actions$: Actions,
		private homeService: HomeService,
		private localStorageService: LocalStorageService,
		private router: Router
	) {}

	@Effect()
	fetchStockItems$ = this.actions$
		.ofType(Home.FETCH_STOCK_ITEMS)
		.map((action: Home.FetchStockItems) => action.payload)
		.exhaustMap(() =>
			this.homeService
				.fetchStockItems()
				.map(stockItems => {
					this.localStorageService.setItem(LS_STOCK_ITEMS_KEY, {
						stockItems
					});
					return new Home.FetchStockItemsSuccess(stockItems);
				})
				.catch(error => of(new Home.FetchStockItemsFailure(error)))
		);

	@Effect()
	addStockItem$: Observable<Action> = this.actions$
		.ofType(Home.ADD_STOCK_ITEM)
		.map((action: Home.AddStockItem) => action.payload)
		.mergeMap(stockItem =>
			this.homeService
				.addStockItem(stockItem)
				.map(addedStockItem => {
					return new Home.AddStockItemSuccess(stockItem);
				})
				.catch(error => of(new Home.AddStockItemFailure(error)))
		);

	@Effect()
	updateStockItem$: Observable<Action> = this.actions$
		.ofType(Home.UPDATE_STOCK_ITEM)
		.map((action: Home.UpdateStockItem) => action.payload)
		.mergeMap(stockItem =>
			this.homeService
				.updateStockItem(stockItem)
				.map(updatedStockItem => {
					return new Home.UpdateStockItemSuccess(stockItem);
				})
				.catch(error => of(new Home.UpdateStockItemFailure(error)))
		);

	@Effect()
	removeStockItem$: Observable<Action> = this.actions$
		.ofType(Home.REMOVE_STOCK_ITEM)
		.map((action: Home.RemoveStockItem) => action.payload)
		.mergeMap(stockItem =>
			this.homeService
				.removeStockItem(stockItem)
				.map(removedStockItem => {
					return new Home.RemoveStockItemSuccess(stockItem);
				})
				.catch(error => of(new Home.RemoveStockItemFailure(error)))
		);

	@Effect({ dispatch: false })
	addSuccess$ = this.actions$
		.ofType(Home.ADD_STOCK_ITEM_SUCCESS)
		.do(() => this.router.navigate(['/']));

	@Effect({ dispatch: false })
	updateSuccess$ = this.actions$
		.ofType(Home.UPDATE_STOCK_ITEM_SUCCESS)
		.do(() => this.router.navigate(['/']));

	@Effect({ dispatch: false })
	removeSuccess$ = this.actions$
		.ofType(Home.REMOVE_STOCK_ITEM_SUCCESS)
		.do(() => this.router.navigate(['/']));
}
