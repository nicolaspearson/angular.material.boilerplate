import { Action } from '@ngrx/store';
import { User, Authenticate } from '@app/auth/models/user';
import { SignUp } from '@app/auth/models/sign-up';

// Login / Logout
export const LOGIN = 'AUTH/LOGIN';
export const LOGOUT = 'AUTH/LOGOUT';
export const LOGIN_SUCCESS = 'AUTH/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'AUTH/LOGIN_FAILURE';
export const LOGIN_REDIRECT = 'AUTH/LOGIN_REDIRECT';

export class Login implements Action {
	readonly type = LOGIN;

	constructor(public payload: Authenticate) {}
}

export class LoginSuccess implements Action {
	readonly type = LOGIN_SUCCESS;

	constructor(public payload: { user: User }) {}
}

export class LoginFailure implements Action {
	readonly type = LOGIN_FAILURE;

	constructor(public payload: any) {}
}

export class LoginRedirect implements Action {
	readonly type = LOGIN_REDIRECT;
}

export class Logout implements Action {
	readonly type = LOGOUT;
}

// Sign Up
export const SIGN_UP = 'AUTH/SIGN_UP';
export const SIGN_UP_SUCCESS = 'AUTH/SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'AUTH/SIGN_UP_FAILURE';
export const SIGN_UP_REDIRECT = 'AUTH/SIGN_UP_REDIRECT';

export class NewSignUp implements Action {
	readonly type = SIGN_UP;

	constructor(public payload: SignUp) {}
}

export class SignUpSuccess implements Action {
	readonly type = SIGN_UP_SUCCESS;

	constructor(public payload: { user: User }) {}
}

export class SignUpFailure implements Action {
	readonly type = SIGN_UP_FAILURE;

	constructor(public payload: any) {}
}

export class SignUpRedirect implements Action {
	readonly type = SIGN_UP_REDIRECT;
}

export type Actions =
	| Login
	| LoginSuccess
	| LoginFailure
	| LoginRedirect
	| Logout
	| NewSignUp
	| SignUpSuccess
	| SignUpFailure
	| SignUpRedirect;
