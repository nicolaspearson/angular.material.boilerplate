import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '@app/reducers';
import * as fromTables from './tables.reducer';

export interface TablesState {
	tables: fromTables.State;
}

export interface State extends fromRoot.State {
	tables: TablesState;
}

export const reducers = {
	tables: fromTables.reducer
};

export const getTablesState = createFeatureSelector<TablesState>('tables');

export const getStockItemEntitiesState = createSelector(
	getTablesState,
	state => state.tables
);

export const getSelectedStockItemId = createSelector(
	getStockItemEntitiesState,
	fromTables.getSelectedId
);

export const getTablesPageError = createSelector(
	getStockItemEntitiesState,
	fromTables.getError
);

export const getStockItemIdList = createSelector(
	getStockItemEntitiesState,
	fromTables.getIds
);

export const {
	selectIds: getStockItemIds,
	selectEntities: getStockItemEntities,
	selectAll: getAllStockItems,
	selectTotal: getTotalStockItems
} = fromTables.adapter.getSelectors(getStockItemEntitiesState);

export const getSelectedStockItem = createSelector(
	getStockItemEntities,
	getSelectedStockItemId,
	(entities, selectedId) => {
		return selectedId && entities[selectedId];
	}
);

export const getNewStockItem = createSelector(
	getStockItemEntitiesState,
	fromTables.getNewStockItem
);

export const getStockItemCollection = createSelector(
	getStockItemEntities,
	getStockItemIdList,
	(entities, ids) => {
		return ids.map(id => entities[id]);
	}
);

export const isSelectedStockItemInCollection = createSelector(
	getStockItemIdList,
	getSelectedStockItemId,
	(ids, selected) => {
		return ids.indexOf(selected) > -1;
	}
);

export const getCollectionLoaded = createSelector(
	getStockItemEntitiesState,
	fromTables.getLoaded
);
export const getCollectionLoading = createSelector(
	getStockItemEntitiesState,
	fromTables.getLoading
);
