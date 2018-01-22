import { Action } from '@ngrx/store';
import { StockItem } from '@app/models/stock-item';

export const FETCH_STOCK_ITEMS = 'TABLES/STOCK_ITEMS/FETCH';
export const FETCH_STOCK_ITEMS_SUCCESS = 'TABLES/STOCK_ITEMS/FETCH_SUCCESS';
export const FETCH_STOCK_ITEMS_FAILURE = 'TABLES/STOCK_ITEMS/FETCH_FAILURE';
export const LOAD = 'TABLES/LOADING';
export const LOAD_SUCCESS = 'TABLES/LOADING_SUCCESS';
export const LOAD_FAILURE = 'TABLES/LOADING_FAILURE';
export const SELECT_STOCK_ITEM = 'TABLES/SELECT_STOCK_ITEM';
export const ADD_STOCK_ITEM = 'TABLES/ADD_STOCK_ITEM';
export const ADD_STOCK_ITEM_SUCCESS = 'TABLES/ADD_STOCK_ITEM_SUCCESS';
export const ADD_STOCK_ITEM_FAILURE = 'TABLES/ADD_STOCK_ITEM_FAILURE';
export const UPDATE_STOCK_ITEM = 'TABLES/UPDATE_STOCK_ITEM';
export const UPDATE_STOCK_ITEM_SUCCESS = 'TABLES/UPDATE_STOCK_ITEM_SUCCESS';
export const UPDATE_STOCK_ITEM_FAILURE = 'TABLES/UPDATE_STOCK_ITEM_FAILURE';
export const REMOVE_STOCK_ITEM = 'TABLES/REMOVE_STOCK_ITEM';
export const REMOVE_STOCK_ITEM_SUCCESS = 'TABLES/REMOVE_STOCK_ITEM_SUCCESS';
export const REMOVE_STOCK_ITEM_FAILURE = 'TABLES/REMOVE_STOCK_ITEM_FAILURE';

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

	constructor(public payload: any) {}
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

	constructor(public payload: any) {}
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

	constructor(public payload: any) {}
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
