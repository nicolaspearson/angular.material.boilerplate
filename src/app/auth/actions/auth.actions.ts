import { Action } from '@ngrx/store';
import { User, Authenticate } from '../models/user';

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

export type Actions =
	| Login
	| LoginSuccess
	| LoginFailure
	| LoginRedirect
	| Logout;
