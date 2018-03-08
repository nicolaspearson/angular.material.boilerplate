import User from '@app/models/user';

export interface Authenticate {
	username: string;
	password: string;
}

export interface ForgotPassword {
	emailAddress: string;
}

export interface ResetPassword {
	resetToken: string;
}

export interface NewPassword {
	resetToken: string;
	newPassword: string;
	user: User;
}

export interface ChangePassword {
	oldPassword: string;
	newPassword: string;
	confirmPassword: string;
	token: string;
	user: User;
}

export interface AuthedUser {
	token: string;
	user: User;
}

export interface VerifyAccount {
	verificationToken: string | undefined;
}
