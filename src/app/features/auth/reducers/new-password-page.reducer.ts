import * as auth from '@app/features/auth/actions/auth.actions';

export interface State {
	error: string | null;
	pending: boolean;
}

export const initialState: State = {
	error: null,
	pending: false
};

export function reducer(state = initialState, action: auth.Actions): State {
	switch (action.type) {
		case auth.NEW_PASSWORD: {
			return {
				...state,
				error: null,
				pending: true
			};
		}

		case auth.NEW_PASSWORD_SUCCESS: {
			return {
				...state,
				error: null,
				pending: false
			};
		}

		case auth.NEW_PASSWORD_FAILURE: {
			return {
				...state,
				error: action.payload,
				pending: false
			};
		}

		default: {
			return state;
		}
	}
}

export const getError = (state: State) => {
	if (state && state.error) {
		return state.error;
	}
	return null;
};

export const getPending = (state: State) => {
	if (state && state.pending) {
		return state.pending;
	}
	return false;
};
