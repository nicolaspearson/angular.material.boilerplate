export interface Authenticate {
	username: string;
	password: string;
}

export interface User {
	token: string;
	user: {
		id: number;
		username: string;
		emailAddress: string;
		enabled: boolean;
		lastLoggedInAt: string;
	};
}
