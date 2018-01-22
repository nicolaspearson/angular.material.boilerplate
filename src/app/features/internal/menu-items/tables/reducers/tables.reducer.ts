import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as Tables from '../actions/tables.actions';
import { StockItem } from '@app/models/stock-item';

export interface StockItemState extends EntityState<StockItem> {
	ids: string[];
	entities: { [id: string]: StockItem };
	selectedStockItemId: string | null;
	error: string | null;
	loaded: boolean;
	loading: boolean;
}

export const adapter: EntityAdapter<StockItem> = createEntityAdapter<StockItem>(
	{
		selectId: (stockItem: StockItem) => stockItem.stockItemId,
		sortComparer: false
	}
);

export const initialState: StockItemState = adapter.getInitialState({
	ids: [],
	entities: {},
	selectedStockItemId: null,
	error: null,
	loaded: false,
	loading: false
});

export function reducer(
	state: StockItemState = initialState,
	action: Tables.Actions
): StockItemState {
	switch (action.type) {
		case Tables.FETCH_STOCK_ITEMS: {
			return {
				...state,
				error: null,
				loading: true
			};
		}

		case Tables.FETCH_STOCK_ITEMS_SUCCESS: {
			return {
				...adapter.addMany(action.payload, state),
				error: null,
				loaded: true,
				loading: false,
				selectedStockItemId: state.selectedStockItemId,
				ids: action.payload.map(stockItem => stockItem.stockItemId)
			};
		}

		case Tables.FETCH_STOCK_ITEMS_FAILURE: {
			return {
				...state,
				error: action.payload,
				loaded: true,
				loading: false
			};
		}

		case Tables.SELECT_STOCK_ITEM: {
			return {
				...state,
				selectedStockItemId: action.payload
			};
		}

		case Tables.UPDATE_STOCK_ITEM_SUCCESS: {
			return addOrUpdateStockItem(action, state);
		}

		case Tables.ADD_STOCK_ITEM_SUCCESS:
		case Tables.REMOVE_STOCK_ITEM_FAILURE: {
			if (state.ids.indexOf(action.payload.stockItemId) > -1) {
				return state;
			}

			return {
				...state,
				ids: [...state.ids, action.payload.stockItemId]
			};
		}

		case Tables.REMOVE_STOCK_ITEM_SUCCESS:
		case Tables.ADD_STOCK_ITEM_FAILURE:
		case Tables.UPDATE_STOCK_ITEM_FAILURE: {
			return {
				...state,
				ids: state.ids.filter(id => id !== action.payload.stockItemId)
			};
		}

		default: {
			return state;
		}
	}
}

function addOrUpdateStockItem(action, state) {
	const newStockItem: StockItem = action.payload;

	// Map the entities to an array
	const entityStockItems = Object.keys(state.entities).map(function(key) {
		return state.entities[key];
	});

	// Try to find a match using the id
	let stockItemIndex = entityStockItems
		.map(stockItem => stockItem.stockItemId)
		.indexOf(newStockItem.stockItemId);
	if (stockItemIndex < 0) {
		stockItemIndex = -1;
	}

	let stockItems: StockItem[] = [];
	if (stockItemIndex >= 0) {
		if (entityStockItems.length > 1) {
			// Replace the existing stock item
			stockItems = entityStockItems
				.slice(0, stockItemIndex)
				.concat([newStockItem])
				.concat(entityStockItems.slice(stockItemIndex + 1));
		} else {
			// We only have a single stock item
			stockItems = [newStockItem];
		}
	} else {
		// The stock item is not currently in our state, append it
		stockItems = [...entityStockItems, newStockItem];
	}

	const entities = stockItems.map(stockItem => {
		return {
			id: stockItem.stockItemId,
			changes: stockItem
		};
	});

	return {
		...state,
		...adapter.updateMany(entities, state),
		error: null,
		loaded: true,
		loading: false,
		ids: stockItems.map(stockItem => stockItem.stockItemId)
	};
}

export const getIds = (state: StockItemState) => state.ids;

export const getEntities = (state: StockItemState) => state.entities;

export const getSelectedId = (state: StockItemState) =>
	state.selectedStockItemId;

export const getError = (state: StockItemState) => state.error;

export const getLoaded = (state: StockItemState) => state.loaded;

export const getLoading = (state: StockItemState) => state.loading;

export const getNewStockItem = () => {
	return {
		stockItemId: 'new',
		registrationNumber: '',
		make: '',
		model: '',
		modelYear: null,
		odometer: null,
		colour: '',
		vin: '',
		retailPrice: '',
		costPrice: '',
		accessories: [],
		images: [],
		createdAt: '',
		updatedAt: '',
		stockAccessories: [],
		stockImages: []
	};
};
