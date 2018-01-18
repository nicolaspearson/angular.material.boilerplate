import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '@app/reducers';
import * as fromAuth from './auth.reducer';
import * as fromLoginPage from './login-page.reducer';
import * as fromSignUpPage from './sign-up-page.reducer';
import * as fromForgotPasswordPage from './forgot-password-page.reducer';

export interface AuthState {
	status: fromAuth.State;
	loginPage: fromLoginPage.State;
	signUpPage: fromSignUpPage.State;
	forgotPasswordPage: fromForgotPasswordPage.State;
}

export interface State extends fromRoot.State {
	auth: AuthState;
}

// State
export const reducers = {
	status: fromAuth.reducer,
	loginPage: fromLoginPage.reducer,
	signUpPage: fromSignUpPage.reducer,
	forgotPasswordPage: fromForgotPasswordPage.reducer
};

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthStatusState = createSelector(
	selectAuthState,
	(state: AuthState) => state.status
);

export const getLoggedIn = createSelector(
	selectAuthStatusState,
	fromAuth.getLoggedIn
);

export const getUser = createSelector(selectAuthStatusState, fromAuth.getUser);

// Login
export const selectLoginPageState = createSelector(
	selectAuthState,
	(state: AuthState) => state.loginPage
);

export const getLoginPageError = createSelector(
	selectLoginPageState,
	fromLoginPage.getError
);

export const getLoginPagePending = createSelector(
	selectLoginPageState,
	fromLoginPage.getPending
);

// Sign Up
export const selectSignUpPageState = createSelector(
	selectAuthState,
	(state: AuthState) => state.signUpPage
);

export const getSignUpPageError = createSelector(
	selectSignUpPageState,
	fromSignUpPage.getError
);

export const getSignUpPagePending = createSelector(
	selectSignUpPageState,
	fromSignUpPage.getPending
);

// Forgot Password
export const selectForgotPasswordPageState = createSelector(
	selectAuthState,
	(state: AuthState) => state.forgotPasswordPage
);

export const getForgotPasswordPageError = createSelector(
	selectForgotPasswordPageState,
	fromForgotPasswordPage.getError
);

export const getForgotPasswordPagePending = createSelector(
	selectForgotPasswordPageState,
	fromForgotPasswordPage.getPending
);
