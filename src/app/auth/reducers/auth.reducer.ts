import * as auth from '@app/auth/actions/auth.actions';
import { User } from '@app/auth/models/user';

export interface State {
	loggedIn: boolean;
	user: User | null;
}

export const initialState: State = {
	loggedIn: false,
	user: null
};

export function reducer(state = initialState, action: auth.Actions): State {
	switch (action.type) {
		case auth.LOGIN_SUCCESS:
		case auth.SIGN_UP_SUCCESS: {
			return {
				...state,
				loggedIn: true,
				user: action.payload.user
			};
		}

		case auth.FORGOT_PASSWORD_SUCCESS: {
			return {
				...state,
				loggedIn: false,
				user: action.payload.user
			};
		}

		case auth.LOGIN_REDIRECT:
		case auth.SIGN_UP_REDIRECT:
		case auth.FORGOT_PASSWORD_REDIRECT:
		case auth.LOGOUT: {
			return initialState;
		}

		default: {
			return state;
		}
	}
}

export const getLoggedIn = (state: State) => state.loggedIn;

export const getUser = (state: State) => state.user;
