// A set of pure functions to reduce boilerplate

export function fetchAll(state) {
	return {
		...state,
		error: null,
		loading: true
	};
}

export function fetchAllSuccess(adapter, state, action, ids) {
	if (state && state.ids && state.ids.length > 0) {
		// Update entities
		try {
			const entities = action.payload.map((entity: any) => {
				return {
					id: entity.id,
					changes: entity
				};
			});

			return {
				...adapter.updateMany(entities, state),
				error: null,
				loaded: true,
				loading: false,
				selectedId: state.selectedId,
				ids
			};
		} catch (error) {
			console.log(error);
		}
	}

	return {
		...adapter.addMany(action.payload, state),
		error: null,
		loaded: true,
		loading: false,
		selectedId: state.selectedId,
		ids
	};
}

export function fetchAllFailure(state, action) {
	return {
		...state,
		error: action.payload,
		loaded: true,
		loading: false
	};
}

export function selectItem(state, action) {
	return {
		...state,
		selectedId: action.payload
	};
}

export function addOneSuccess(adapter, state, action) {
	return {
		...state,
		...adapter.addOne(action.payload, state),
		error: null,
		loaded: true,
		loading: false,
		ids: [...state.ids, action.payload.id]
	};
}

export function addOneFailure(state, action) {
	return {
		...state,
		error: action.payload,
		loaded: true,
		loading: false,
		ids: state.ids.filter(id => id !== action.payload.id)
	};
}

export function updateOneSuccess(adapter, state, entities, ids) {
	return {
		...state,
		...adapter.updateMany(entities, state),
		error: null,
		loaded: true,
		loading: false,
		ids
	};
}

export function updateOneFailure(state, action) {
	return {
		...state,
		error: action.payload,
		loaded: true,
		loading: false,
		ids: state.ids.filter(id => id !== action.payload.id)
	};
}

export function removeOneSuccess(adapter, state, action) {
	return {
		...state,
		...adapter.removeOne(action.payload.id, state),
		error: null,
		loaded: true,
		loading: false,
		ids: state.ids.filter(id => id !== action.payload.id)
	};
}

export function removeOneFailure(state, action) {
	if (state.ids.indexOf(action.payload.id) > -1) {
		return state;
	}

	return {
		...state,
		error: action.payload,
		loaded: true,
		loading: false,
		ids: [...state.ids, action.payload.id]
	};
}
