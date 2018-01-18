import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as Tables from '../actions/tables.actions';
import { StockItem } from '@app/models/stock-item';

export interface State extends EntityState<StockItem> {
	selectedStockItemId: string | null;
	ids: string[];
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

export const initialState: State = adapter.getInitialState({
	selectedStockItemId: null,
	stockItems: [],
	ids: [],
	error: null,
	loaded: false,
	loading: false
});

export function reducer(state = initialState, action: Tables.Actions): State {
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
			return {
				...adapter.removeOne(action.payload.stockItemId, state),
				ids: state.ids.filter(id => id !== action.payload.stockItemId)
			};
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

export const getSelectedId = (state: State) => state.selectedStockItemId;

export const getIds = (state: State) => state.ids;

export const getError = (state: State) => state.error;

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

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
