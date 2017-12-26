import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromHome from './home.reducer';

export interface HomeState {
	home: fromHome.State;
}

export interface State extends fromRoot.State {
	home: HomeState;
}

export const reducers = {
	home: fromHome.reducer
};

export const getHomeState = createFeatureSelector<HomeState>('home');

export const getStockItemEntitiesState = createSelector(
	getHomeState,
	state => state.home
);

export const getSelectedStockItemId = createSelector(
	getStockItemEntitiesState,
	fromHome.getSelectedId
);

export const getHomePageError = createSelector(
	getStockItemEntitiesState,
	fromHome.getError
);

export const getStockItemIdList = createSelector(
	getStockItemEntitiesState,
	fromHome.getIds
);

export const {
	selectIds: getStockItemIds,
	selectEntities: getStockItemEntities,
	selectAll: getAllStockItems,
	selectTotal: getTotalStockItems
} = fromHome.adapter.getSelectors(getStockItemEntitiesState);

export const getSelectedStockItem = createSelector(
	getStockItemEntities,
	getSelectedStockItemId,
	(entities, selectedId) => {
		return selectedId && entities[selectedId];
	}
);

export const getNewStockItem = createSelector(
	getStockItemEntitiesState,
	fromHome.getNewStockItem
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
	fromHome.getLoaded
);
export const getCollectionLoading = createSelector(
	getStockItemEntitiesState,
	fromHome.getLoading
);
