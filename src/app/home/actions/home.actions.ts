import { Action } from '@ngrx/store';
import { StockItem } from '../models/stockItem';

export const FETCH_STOCK_ITEMS = 'HOME/STOCK_ITEMS/FETCH';
export const FETCH_STOCK_ITEMS_SUCCESS = 'HOME/STOCK_ITEMS/FETCH_SUCCESS';
export const FETCH_STOCK_ITEMS_FAILURE = 'HOME/STOCK_ITEMS/FETCH_FAILURE';
export const LOAD = 'HOME/LOADING';
export const LOAD_SUCCESS = 'HOME/LOADING_SUCCESS';
export const LOAD_FAILURE = 'HOME/LOADING_FAILURE';
export const SELECT_STOCK_ITEM = 'HOME/SELECT_STOCK_ITEM';
export const ADD_STOCK_ITEM = 'HOME/ADD_STOCK_ITEM';
export const ADD_STOCK_ITEM_SUCCESS = 'HOME/ADD_STOCK_ITEM_SUCCESS';
export const ADD_STOCK_ITEM_FAILURE = 'HOME/ADD_STOCK_ITEM_FAILURE';
export const UPDATE_STOCK_ITEM = 'HOME/UPDATE_STOCK_ITEM';
export const UPDATE_STOCK_ITEM_SUCCESS = 'HOME/UPDATE_STOCK_ITEM_SUCCESS';
export const UPDATE_STOCK_ITEM_FAILURE = 'HOME/UPDATE_STOCK_ITEM_FAILURE';
export const REMOVE_STOCK_ITEM = 'HOME/REMOVE_STOCK_ITEM';
export const REMOVE_STOCK_ITEM_SUCCESS = 'HOME/REMOVE_STOCK_ITEM_SUCCESS';
export const REMOVE_STOCK_ITEM_FAILURE = 'HOME/REMOVE_STOCK_ITEM_FAILURE';

/**
 * Every action is comprised of at least a type and an optional payload.
 */
export class FetchStockItems implements Action {
	readonly type = FETCH_STOCK_ITEMS;

	constructor(public payload?: {}) {}
}

export class FetchStockItemsSuccess implements Action {
	readonly type = FETCH_STOCK_ITEMS_SUCCESS;

	constructor(public payload: StockItem[]) {}
}

export class FetchStockItemsFailure implements Action {
	readonly type = FETCH_STOCK_ITEMS_FAILURE;

	constructor(public payload: any) {}
}

export class Load implements Action {
	readonly type = LOAD;

	constructor(public payload: StockItem) {}
}

export class LoadSuccess implements Action {
	readonly type = LOAD_SUCCESS;

	constructor(public payload: StockItem[]) {}
}

export class LoadFailure implements Action {
	readonly type = LOAD_FAILURE;

	constructor(public payload: any) {}
}

export class SelectStockItem implements Action {
	readonly type = SELECT_STOCK_ITEM;

	constructor(public payload: string) {}
}

export class AddStockItem implements Action {
	readonly type = ADD_STOCK_ITEM;

	constructor(public payload: StockItem) {}
}

export class AddStockItemSuccess implements Action {
	readonly type = ADD_STOCK_ITEM_SUCCESS;

	constructor(public payload: StockItem) {}
}

export class AddStockItemFailure implements Action {
	readonly type = ADD_STOCK_ITEM_FAILURE;

	constructor(public payload: StockItem) {}
}

export class UpdateStockItem implements Action {
	readonly type = UPDATE_STOCK_ITEM;

	constructor(public payload: StockItem) {}
}

export class UpdateStockItemSuccess implements Action {
	readonly type = UPDATE_STOCK_ITEM_SUCCESS;

	constructor(public payload: StockItem) {}
}

export class UpdateStockItemFailure implements Action {
	readonly type = UPDATE_STOCK_ITEM_FAILURE;

	constructor(public payload: StockItem) {}
}

export class RemoveStockItem implements Action {
	readonly type = REMOVE_STOCK_ITEM;

	constructor(public payload: StockItem) {}
}

export class RemoveStockItemSuccess implements Action {
	readonly type = REMOVE_STOCK_ITEM_SUCCESS;

	constructor(public payload: StockItem) {}
}

export class RemoveStockItemFailure implements Action {
	readonly type = REMOVE_STOCK_ITEM_FAILURE;

	constructor(public payload: StockItem) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions =
	| FetchStockItems
	| FetchStockItemsSuccess
	| FetchStockItemsFailure
	| Load
	| LoadSuccess
	| LoadFailure
	| SelectStockItem
	| AddStockItem
	| AddStockItemSuccess
	| AddStockItemFailure
	| UpdateStockItem
	| UpdateStockItemSuccess
	| UpdateStockItemFailure
	| RemoveStockItem
	| RemoveStockItemSuccess
	| RemoveStockItemFailure;
