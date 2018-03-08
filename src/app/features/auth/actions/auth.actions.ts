import { Action } from '@ngrx/store';
import {
	AuthedUser,
	Authenticate,
	ChangePassword,
	ForgotPassword,
	NewPassword,
	ResetPassword,
	VerifyAccount
} from '@app/models/auth';
import { SignUp } from '@app/models/sign-up';
import User from '@app/models/user';

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

	constructor(public payload: { authedUser: AuthedUser }) {}
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

	constructor(public payload: any) {}
}

export class SignUpFailure implements Action {
	readonly type = SIGN_UP_FAILURE;

	constructor(public payload: any) {}
}

export class SignUpRedirect implements Action {
	readonly type = SIGN_UP_REDIRECT;
}

// Forgot Password
export const FORGOT_PASSWORD = 'AUTH/FORGOT_PASSWORD';
export const FORGOT_PASSWORD_SUCCESS = 'AUTH/FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILURE = 'AUTH/FORGOT_PASSWORD_FAILURE';
export const FORGOT_PASSWORD_REDIRECT = 'AUTH/FORGOT_PASSWORD_REDIRECT';

export class SubmitForgotPassword implements Action {
	readonly type = FORGOT_PASSWORD;

	constructor(public payload: ForgotPassword) {}
}

export class ForgotPasswordSuccess implements Action {
	readonly type = FORGOT_PASSWORD_SUCCESS;

	constructor(public payload: { authedUser: AuthedUser }) {}
}

export class ForgotPasswordFailure implements Action {
	readonly type = FORGOT_PASSWORD_FAILURE;

	constructor(public payload: any) {}
}

export class ForgotPasswordRedirect implements Action {
	readonly type = FORGOT_PASSWORD_REDIRECT;
}

// Change Password
export const CHANGE_PASSWORD = 'AUTH/CHANGE_PASSWORD';
export const CHANGE_PASSWORD_SUCCESS = 'AUTH/CHANGE_PASSWORD_SUCCESS';
export const CHANGE_PASSWORD_FAILURE = 'AUTH/CHANGE_PASSWORD_FAILURE';

export class SubmitChangePassword implements Action {
	readonly type = CHANGE_PASSWORD;

	constructor(public payload: ChangePassword) {}
}

export class ChangePasswordSuccess implements Action {
	readonly type = CHANGE_PASSWORD_SUCCESS;

	constructor(public payload: { authedUser: AuthedUser }) {}
}

export class ChangePasswordFailure implements Action {
	readonly type = CHANGE_PASSWORD_FAILURE;

	constructor(public payload: any) {}
}

// Reset Password
export const RESET_PASSWORD = 'AUTH/RESET_PASSWORD';
export const RESET_PASSWORD_SUCCESS = 'AUTH/RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILURE = 'AUTH/RESET_PASSWORD_FAILURE';

export class SubmitResetPassword implements Action {
	readonly type = RESET_PASSWORD;

	constructor(public payload: ResetPassword) {}
}

export class ResetPasswordSuccess implements Action {
	readonly type = RESET_PASSWORD_SUCCESS;

	constructor(public payload: { user: User }) {}
}

export class ResetPasswordFailure implements Action {
	readonly type = RESET_PASSWORD_FAILURE;

	constructor(public payload: any) {}
}

// New Password
export const NEW_PASSWORD = 'AUTH/NEW_PASSWORD';
export const NEW_PASSWORD_SUCCESS = 'AUTH/NEW_PASSWORD_SUCCESS';
export const NEW_PASSWORD_FAILURE = 'AUTH/NEW_PASSWORD_FAILURE';
export const NEW_PASSWORD_REDIRECT = 'AUTH/NEW_PASSWORD_REDIRECT';

export class SubmitNewPassword implements Action {
	readonly type = NEW_PASSWORD;

	constructor(public payload: NewPassword) {}
}

export class NewPasswordSuccess implements Action {
	readonly type = NEW_PASSWORD_SUCCESS;

	constructor(public payload: { authedUser: AuthedUser }) {}
}

export class NewPasswordFailure implements Action {
	readonly type = NEW_PASSWORD_FAILURE;

	constructor(public payload: any) {}
}

export class NewPasswordRedirect implements Action {
	readonly type = NEW_PASSWORD_REDIRECT;
}

// Verify Account
export const VERIFY_ACCOUNT = 'AUTH/VERIFY_ACCOUNT';
export const VERIFY_ACCOUNT_SUCCESS = 'AUTH/VERIFY_ACCOUNT_SUCCESS';
export const VERIFY_ACCOUNT_FAILURE = 'AUTH/VERIFY_ACCOUNT_FAILURE';

export class SubmitVerifyAccount implements Action {
	readonly type = VERIFY_ACCOUNT;

	constructor(public payload: VerifyAccount) {}
}

export class VerifyAccountSuccess implements Action {
	readonly type = VERIFY_ACCOUNT_SUCCESS;

	constructor(public payload: { user: User }) {}
}

export class VerifyAccountFailure implements Action {
	readonly type = VERIFY_ACCOUNT_FAILURE;

	constructor(public payload: any) {}
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
	| SignUpRedirect
	| SubmitForgotPassword
	| ForgotPasswordSuccess
	| ForgotPasswordFailure
	| ForgotPasswordRedirect
	| SubmitChangePassword
	| ChangePasswordSuccess
	| ChangePasswordFailure
	| SubmitResetPassword
	| ResetPasswordSuccess
	| ResetPasswordFailure
	| SubmitNewPassword
	| NewPasswordSuccess
	| NewPasswordFailure
	| NewPasswordRedirect
	| SubmitVerifyAccount
	| VerifyAccountSuccess
	| VerifyAccountFailure;
