import * as auth from '@app/features/auth/actions/auth.actions';
import { AuthedUser } from '@app/models/auth';

export interface State {
	loggedIn: boolean;
	authedUser: AuthedUser | null;
}

export const initialState: State = {
	loggedIn: false,
	authedUser: null
};

export function reducer(state = initialState, action: auth.Actions): State {
	switch (action.type) {
		case auth.LOGIN_SUCCESS:
		case auth.NEW_PASSWORD_SUCCESS:
		case auth.SIGN_UP_SUCCESS: {
			return {
				...state,
				loggedIn: true,
				authedUser: action.payload.authedUser
			};
		}

		case auth.FORGOT_PASSWORD_SUCCESS: {
			return {
				...state,
				loggedIn: false,
				authedUser: null
			};
		}

		case auth.LOGIN_REDIRECT:
		case auth.SIGN_UP_REDIRECT:
		case auth.FORGOT_PASSWORD_REDIRECT:
		case auth.NEW_PASSWORD_REDIRECT:
		case auth.LOGOUT: {
			return initialState;
		}

		default: {
			return state;
		}
	}
}

export const getLoggedIn = (state: State) => state.loggedIn;

export const getAuthedUser = (state: State) => state.authedUser;
